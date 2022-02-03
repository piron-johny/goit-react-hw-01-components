import React from "react"

const Description = ({ username, tag, location, avatar }) => {
  return (
    <div class="description">
      <img
        src={avatar}
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{username}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>
  )
}

export default Description