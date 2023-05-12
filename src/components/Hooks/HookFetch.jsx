import CustomFetch from "./CustomFetch"

const HookFetch = () => {
    const data = CustomFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <div>
      {data && data.map((info => <li className="d-flex" key={info.id}>{info.name}</li>))}
    </div>
  )
}

export default HookFetch
