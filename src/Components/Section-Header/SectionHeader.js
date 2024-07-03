import './SectionHeader.css'
import PrevAndNextIcone from '../Prev-Next-icon/PrevAndNextIcone';

function SectionHeader({ span, sectionName, spanIcone }) {
    return (
        <div className='section-Header pt-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <span className='mb-4'>
                            <div className='me-2 fs-4 d-inline-block'>
                                {spanIcone}
                            </div>
                            {span}
                        </span>
                        <h2 className='fw-bold'>{sectionName}</h2>
                    </div>
                </div>
        </div>
    )
}

export default SectionHeader
