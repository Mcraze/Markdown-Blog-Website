import { Copyright, Heart } from "lucide-react"

const Footer = () => {
    return (
        <footer>
            <div className="max-w-7xl mx-auto p-4 flex justify-center items-center gap-4">
                <div className="flex items-center gap-2">
                    Built with <Heart size={20} stroke="0" fill="red" /> by Mitesh Adelkar
                </div>
            </div>
        </footer>
    )
}

export default Footer