import SocialMedia from '../SocialMedia/SocialMedia'
import'./Footer.css'

function Footer() {
  return (
    <footer>
        <footer className="footer container">
            <h6>©2024 Pre-School. All rights reserved. Design by <a href='https://levidarren.me/' target='_blank'>Levi</a> </h6>
            <ul>
              <li>
              <SocialMedia/>
              </li>
              <li>privacy policy</li>
              <li>Term of use</li>
            </ul>
        </footer>
    </footer>
  )
}

export default Footer
