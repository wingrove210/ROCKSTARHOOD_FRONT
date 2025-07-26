import ItemList from "./ItemList"

export default function Category() {
  return (
    <div className="w-full px-10">
       <div>
          <h1 className="uppercase">Джерси</h1>
          <div>
            <ItemList/>
          </div>
       </div>
    </div>
  )
}
