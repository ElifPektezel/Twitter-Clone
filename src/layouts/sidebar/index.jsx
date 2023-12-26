import Logo from "./logo";
import Menu from "./menu";


function SideBar() {
    return (
        <aside className="w-[275px] min-h-screen ">
            <Logo/>
          <Menu/>
        </aside>
    );
}

export default SideBar;
