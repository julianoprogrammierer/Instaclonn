
import { Phone,Group, GetApp, Imag1, Imag2, Download, RemoveAcc, NotAccount, PhPerfil, InstaclonnLogin, Group2, InstaclonContinue, InstaclonnWrapper } from '../styles/pages/Home'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <InstaclonnWrapper>
        <Phone>
          <img src="/celulares.png" alt=""/>
        </Phone>
          <InstaclonContinue>
              <Group>
                <img src="/instaclonn.png" className="instaclonn-logo" alt="instaclonn-logo"/>
                  <PhPerfil>
                    <img src="juka.jpg" alt="phto-perfil"/>
                  </PhPerfil>

                  <InstaclonnLogin href="https://www.instagram.com/">Continue as juka</InstaclonnLogin>
                  <RemoveAcc href="https://www.instagram.com/accounts/emailsignup/">Remove account</RemoveAcc>
              </Group>
                 <Group2>
                   <NotAccount>Not Juka?</NotAccount>
                   <p><a href="https://www.instagram.com/accounts/emailsignup/">Switch Accounts</a>  or <a href="https://www.instagram.com/accounts/emailsignup/">Sign Up</a></p>                  
                 </Group2> 

                 <GetApp>
                   <p></p>

                   <Download>
                     <Imag1>                      
                          
                          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_US&gl=US">
                          <img border="0" src="/googleplay.png" alt="google play" />
                          </ a>                        
                     </Imag1>
                     <Imag2>
                     <a href="https://apps.apple.com/us/app/instagram/id389801252"><img border="0" src="/appstore.png" alt="playstore"/>
                     </a>
                     </Imag2>

                     
                   </Download>
                 </GetApp>


          </InstaclonContinue>
    </InstaclonnWrapper>        
  )
}

