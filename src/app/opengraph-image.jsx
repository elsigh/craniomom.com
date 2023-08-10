/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const alt = 'CranioMom'
export const size = {
  width: 882,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  try {
    const imageData = await fetch(
      new URL('./../images/og.png', import.meta.url)
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'black',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <img
              width={size.width}
              height={size.height}
              src={imageData}
              alt=""
            />
          </div>
        </div>
      ),
      { ...size }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}

/*

          <div
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
          */
