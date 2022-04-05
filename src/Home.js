import Modal from "./Modal";
import { useState } from "react";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="home">
            <div className="comment">
                <button onClick={() => setIsOpen(true)}>Open modal</button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)} />
            </div>
        </div>
    );
}

export default Home;