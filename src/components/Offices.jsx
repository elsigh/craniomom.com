import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600'
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="In-office sessions" invert={invert}>
          <a href="https://www.rootandbranchcenter.com/">
            The Root and the Branch
          </a>
          <br />
          <a href="https://goo.gl/maps/Vntw2pK9iSZPzK1F9">
            2409 Sacramento St #2, San Francisco, CA 94115
          </a>
        </Office>
      </li>
      <li>
        <Office name="In-home sessions" invert={invert}>
          for babies under 8 weeks - within San Francisco is $275 (determined by
          distance)
        </Office>
      </li>
    </ul>
  )
}
