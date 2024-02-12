import ThemeToggle from './ThemeToggle'
const Navbar = () => {
  return (
    <nav className="flex items-center justify-around bg-muted">
      <p> Erik Jonssons Protfolio</p>
      <ThemeToggle />
    </nav>
  )
}
export default Navbar
