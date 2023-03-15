
export default function PageBox({ number, setNumberPage}) {
  return (
    <input type="button" onClick={() => setNumberPage(number - 1)} className="miniBox" value={number} />
  )
}
