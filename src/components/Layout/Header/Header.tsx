import Search from "../../../assets/search"
import MenuIcon from "../../../assets/menu"
export default function Header() {
  return (
    <div className="h-20 text-center flex items-center justify-between text-white px-5">
      <MenuIcon/>
      <h1>ДЕМО-МАГАЗИН</h1>
      <Search/>
    </div>
  )
}
