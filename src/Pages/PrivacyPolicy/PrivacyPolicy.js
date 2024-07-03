import './PrivacyPolicy.css'
import NavBar from '../../Components/NavBar/NavBar'
import Offer from '../../Components/Offer/Offer'
import Top from '../../Components/Top/Top'
import Footer from '../../Components/Footer/Footer'
import React from 'react'
import { Link } from 'react-router-dom'
import Service from '../../Components/Service/Service'

const PrivacyPolicy = () => {
    return (
        <>
            <NavBar bgColor='white' />
            <div className='privacypolicy-section'>
                <Offer />
                <Top  page_to='/privacyPolicy' page_title='Privacy Policy' section_title="Privacy Policy" />
                <div className='container'>
                    <h4 className='my-4'>This Privacy policy was published on February 26th, 2022.</h4>
                    <h2>GDPR compliance</h2>
                    <p className='mt-4'>Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero,
                        varius congue magna tempus vitae. Donec a justo nec elit sagittis sagittis eu a ante. Vivamus rutrum elit odio. Donec gravida id ligula ut faucibus.
                        Aenean convallis ligula orci, ut congue nunc sodales ut. In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus,
                        eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>
                    <h2>About eTrade</h2>
                    <p className='mt-4'>In dapibus, nibh sit amet pulvinar convallis, massa nunc tincidunt nunc, a pretium risus nulla ut dui. Ut ut condimentum tellus, dapibus volutpat est. Integer ullamcorper iaculis blandit. Pellentesque id tempus urna. Quisque luctus cursus imperdiet. <Link to={''}>hello@etrade.store</Link></p>
                    <h2>When we collect personal data about you</h2>
                    <ul>
                        <li>Email is a crucial channel in any marketing.</li>
                        <li>Curious what to say? How to say it?</li>
                        <li>Whether you’re kicking off a new campaign.</li>
                        <li>Habitasse per feugiat aliquam luctus accumsan curae</li>
                    </ul>
                    <h2>Why we collect and use personal data</h2>
                    <p className='mt-4'>Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero, varius congue magna tempus vitae. Donec a justo nec elit sagittis sagittis eu a ante. Vivamus rutrum elit odio. Donec gravida id ligula ut faucibus. Aenean convallis ligula orci, ut congue nunc sodales ut. In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>
                    <ul>
                        <li>Nulla facilisi. Sed pulvinar nec purus eu sollicitudin. Quisque ut tempus quam, in cursus eros.</li>
                        <li>Fusce malesuada luctus velit eu tempor. Pellentesque habitant morbi tristique senectus et netus et.</li>
                        <li>Pellentesque ornare nulla est, non blandit sapien lacinia nec. Nulla ac velit id est mattis faucibus.</li>
                        <li>Aliquam lacus nisi, lobortis non diam eget, malesuada bibendum justo. Praesent fringilla sagittis ex, ac molestie ipsum ullamcorper a.</li>
                        <li>Vestibulum nulla tortor, aliquam at porta in, hendrerit sed nibh.</li>
                    </ul>
                    <h2>Type of personal data collected</h2>
                    <p className='mt-4'>In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>
                    <h2>Information we collect automatically</h2>
                    <p className='mt-4'>Etiam vel mi vel neque mattis iaculis. Proin vitae consequat augue, vel porta tellus. Nullam tincidunt ac lorem eu lacinia. Praesent ac diam id odio elementum efficitur. Suspendisse sit amet urna vitae neque tempor pellentesque. Aenean ut dapibus urna. Pellentesque neque nulla, interdum vitae rhoncus at, pretium id arcu. Etiam sodales lectus at convallis vestibulum. Quisque non neque augue. Nullam condimentum nulla felis, nec suscipit augue congue ac.</p>
                    <h2>The use of cookies and web beacons</h2>
                    <p className='mt-4'>We may log information using "cookies.
                        " Cookies are small data files stored on your hard drive by a website. Cookies help us make our Site and your visit better.</p>
                    <p className='mt-4'>We may log information using digital images called web beacons on our Site or in our emails.</p>
                    <p className='mt-4'>This information is used to make our Site work more efficiently, as well as to provide business and marketing information to the owners of the Site, and to gather such personal data as browser type and operating system, referring page, path through site, domain of ISP, etc. for the purposes of understanding how visitors use our Site. Cookies and similar technologies help us tailor our Site to your personal needs, as well as to detect and prevent security threats and abuse. If used alone, cookies and web beacons do not personally identify you.</p>
                    <h2>How long we keep your data</h2>
                    <p className='mt-4'>We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.</p>
                    <p className='mt-4'>This means that we may retain your personal data for a reasonable period after your last interaction with us. When the personal data that we have collected is no longer required, we will delete it securely. We may process data for statistical purposes, but in such cases, data will be anonymized.</p>
                    <h2>Your rights to your personal data</h2>
                    <p className='mt-4'>We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.</p>
                    <h2>Hotjar’s privacy policy</h2>
                    <p className='mt-4'>Pellentesque vestibulum venenatis iaculis. Aliquam viverra sodales ultrices. Quisque sed purus id massa consequat consectetur eu vel lorem. Maecenas lectus velit, cursus quis orci non, laoreet hendrerit mi. Nulla vitae ipsum fringilla, placerat metus eu, malesuada velit. Quisque viverra risus ex. Aenean commodo vestibulum efficitur. Nullam ligula orci, aliquet sed luctus vel, luctus vel dui. Sed pulvinar, ipsum at mattis imperdiet, diam augue tempor diam, sed porttitor odio elit ut ante. In posuere mi at mi pellentesque ornare sit amet gravida nisi. Praesent ac blandit odio. Curabitur iaculis ante elit, et imperdiet leo mollis at.</p>
                    <h2>Changes to this Privacy Policy</h2>
                    <p className='mt-4'>Integer eu ornare lectus, ornare ullamcorper tellus. Morbi in urna a justo dignissim luctus. Nam sagittis ante ut lorem feugiat, sed consectetur ligula lacinia. Vestibulum quis mauris sed lectus pretium dictum sed vitae orci. Vestibulum facilisis facilisis mauris non maximus. Nam tristique ipsum egestas, suscipit orci sit amet, rutrum ante. Proin in felis pellentesque, ullamcorper enim vel, molestie ipsum.</p>
                    <Service />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPolicy
