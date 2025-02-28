function showDetails(profession) {
    let detailContent = document.getElementById('detail-content');
    switch (profession) {
        case 'doctor':
            detailContent.innerHTML = `
                <h3><a href="Doctor.html">Doctor</a></h3>
                <p><strong>Education Required:</strong> Medical degree (MD or DO)</p>
                <p><strong>Skills Needed:</strong> Compassion, communication, problem-solving, attention to detail.</p>
                <p><strong>Training:</strong> Residency program (3-7 years after medical school).</p>
                <p><strong>Opportunities:</strong> Hospitals, clinics, private practice.</p>
                <p><strong>Additional Info:</strong> Continuous education is necessary to stay updated with medical advancements.</p>
            `;
            break;
        case 'engineer':
            detailContent.innerHTML = `
                <h3>Engineer</h3>
                <p><strong>Education Required:</strong> Bachelor's degree in engineering.</p>
                <p><strong>Skills Needed:</strong> Analytical thinking, problem-solving, teamwork, creativity.</p>
                <p><strong>Training:</strong> Internships and entry-level positions.</p>
                <p><strong>Opportunities:</strong> Various industries including technology, construction, and manufacturing.</p>
                <p><strong>Additional Info:</strong> Specializations include <a href="Civli.html">civil</a>, <a href="Mech.html"> mechanical</a>, <a href="EEE.html">electrical</a>, and <a href="Software.html">software engineering</a>.</p>
            `;
            break;
        case 'athlete':
            detailContent.innerHTML = `
                <h3><a href="Athe.html">Athlete</a></h3>
                <p><strong>Education Required:</strong> Varies by sport; some pursue higher education.</p>
                <p><strong>Skills Needed:</strong> Physical fitness, discipline, teamwork, dedication.</p>
                <p><strong>Training:</strong> Extensive training and practice in their sport.</p>
                <p><strong>Opportunities:</strong> Professional sports teams, coaching, fitness training.</p>
                <p><strong>Additional Info:</strong> Athletes often start training at a young age and participate in competitions.</p>
            `;
            break;
         case 'lawyer':
                detailContent.innerHTML=  `
                <h3><a href="law.html">Lawyer</a></h3>
                <p><strong>Education Required:</strong>Bachelor's Degree,Law School Admission Test(LSAT),Law School.</p>
                <p><strong>Skills Needed:</strong>Analytical Skills,Research Skills,Ethical Judgment,Client Management,Organizational Skills.</p>
                <p><strong>Training:</strong>Internships and Clearkships,Continuing Legal Education(CLE),Networking and Mentorship.</p>
                <p><strong>Opportunities:</strong>Private Practice,Corporate Sector,Judiciary,Legal Research.</p>
                <p><strong>Additional Info(challenges):</strong> Work life Balance,Client Expectation and Stress,Economic Pressure.</p>
                `;
            break;
        default:
            detailContent.innerHTML = '<p>Select a profession to see details.</p>';
            break;
    }
}
