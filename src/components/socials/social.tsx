import { BrandGithub, BrandTwitter } from 'tabler-icons-react';
import "../card/style.css"

export default function OpireSocial() {
    return (
        <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <BrandGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <BrandTwitter/>
            </a>
        </div>
    );
}
