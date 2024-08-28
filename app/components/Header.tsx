import Image from "next/image";

const Header = () => {
    return (
        <header>
            <div>
                <Image src="/logo.jpg" alt="logo" width={200} height={50} />
                <h1>シミュレーション</h1>
            </div>
        </header>
    );
}

export default Header;
