export function EmailTemplate({ from, message, name, phone }) {
  return (
    <div>
      <h1>Contact from website</h1>
      <p>
        <b>Name</b>: {name}
      </p>
      <p>
        <b>Email</b>: {from}
      </p>
      <p>
        <b>Phone</b>: {phone}
      </p>
      <p>
        <b>Message</b>: {message}
      </p>
    </div>
  )
}
