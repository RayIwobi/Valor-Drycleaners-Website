import React from 'react'
import t1 from '../components/assets/team/t1.jpg';
import t2 from '../components/assets/team/t2.jpg';
import t3 from '../components/assets/team/t3.jpg';
import t4 from '../components/assets/team/t4.jpg';

function Team() {
  return (
    <div>
        <div>
        <div className='featureheader'>
            <h1>MEET THE TEAM</h1>
            <hr className='horizontalrule'/>
            <h3>With over 20 years of industry experience, 
                we established Valor Drycleaners to provide 
                high-quality garment care with a customer-first approach.
            </h3>
        </div>
           <div className='theteam'>
            <div className='teammembers'>
                <img src={t1} alt='team'/>
                <h3>David Langston</h3>
                <h4>Director</h4>
            </div>
            <div className='teammembers'>
                <img src={t2} alt='team' id='fit'/>
                <h3>Ethan Waverly</h3>
                <h4>Senior Designer</h4>
            </div>
            <div className='teammembers'>
                <img src={t3} alt='team' id='fit'/>
                <h3>Sophia Carmichael</h3>
                <h4>Senior Designer</h4>
            </div>
            <div className='teammembers'>
                <img src={t4} alt='team' id='fit'/>
                <h3>Rachel Stanton</h3>
                <h4>Project Manager</h4>

            </div>

        </div>
        </div>
    </div>
  )
}

export default Team
