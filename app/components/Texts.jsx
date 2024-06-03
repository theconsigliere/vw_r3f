export default function Texts({ title, desc }) {
  return (
    <li className="texts__txt">
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  )
}
