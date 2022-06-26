import React from 'react'

const Modal = () => {
  return (
    <article>
      <h2>Create anniversaries</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          const title = event.target.title.value

          props.onCreate(title)
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  )
}

export default Modal
