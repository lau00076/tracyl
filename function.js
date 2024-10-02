document.addEventListener("DOMContentLoaded", function () {
    const navHome = document.getElementById('home');
    const toTop = document.getElementById('to-top')
    const mainBrief = document.querySelector('.main-brief');
    const showcaseContainer = document.getElementById('showcaseContainer');

    // Function to scroll to the top when clicking the "to-top" link
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Function to show mainBrief and hide showcaseContainer
    function showMainBrief() {
        mainBrief.style.display = 'block';

        mainBrief.innerHTML = `
            <div class="main-head">
                <h1>Projects</h1>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="work-section">
                <div class="work-head">
                    <div class="work-title">
                        <h1>infoStream</h1>
                        <h1 class="date">2024</h1>
                    </div>
                    <div class="work-summary">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente, repudiandae quidem facilis possimus ipsum mollitia cumque! Velit eius mollitia, incidunt dolorem, quis error eligendi quia maiores nemo praesentium consequatur!</p>
                    </div>
                </div>
                <div class="work-foot">
                    <div class="work-tag">
                        <span class="tag">UI/UX design</span>
                        <span class="tag">Wireframing</span>
                        <span class="tag">Prototyping</span>
                    </div>
                    <a href="/showcase-infoStream" class="more" data-project="showcase-stream"><p>MORE <i class="fa-solid fa-arrow-right-long"></i></p></a>
                </div>
            </div>
            <hr>
            <div class="work-section">
                <div class="work-head">
                    <div class="work-title">
                        <h1>Silver Talent</h1>
                        <h1 class="date">2024</h1>
                    </div>
                    <div class="work-summary">
                        <p>Silver Talent is creating a digital platform for seniors in Ottawa, offering personalized resources and engagement. The project includes a user-friendly website with high-fidelity prototypes and deployment recommendations.</p>
                    </div>
                </div>
                <div class="work-foot">
                    <div class="work-tag">
                        <span class="tag">UI/UX design</span>
                        <span class="tag">Wireframing</span>
                        <span class="tag">Prototyping</span>
                    </div>
                    <a href="#" class="more" data-project="showcase-st"><p>MORE <i class="fa-solid fa-arrow-right-long"></i></p></a>
                </div>
            </div>
            <hr>
            <div class="work-section">
                <div class="work-head">
                    <div class="work-title">
                        <h1>EMS &#8212; Saarthi</h1>
                        <h1 class="date">2023</h1>
                    </div>
                    <div class="work-summary">
                        <p>World Design Organisation (WDO) hosted the World Design Challenge in March 2023. I collaborated with international students to design a mobile app aimed at improving the medical system in urban India.</p>
                    </div>
                </div>
                <div class="work-foot">
                    <div class="work-tag">
                        <span class="tag">UI/UX design</span>
                        <span class="tag">Wireframing</span>
                    </div>
                    <a href="#" class="more" data-project="showcase-ems"><p>MORE <i class="fa-solid fa-arrow-right-long"></i></p></a>
                </div>
            </div>
        `
        
        showcaseContainer.style.display = 'none';

        scrollToTop()
    }

    // Add click event listener to "home" link
    navHome.addEventListener('click', function(e) {
        e.preventDefault();
        showMainBrief();
    });

    // Add click event listener to "to-top" link
    toTop.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        scrollToTop(); // Call the scrollToTop function
    });

    // Function to show showcaseContainer and hide mainBrief
    function createShowcaseContent(projectId) {
        let content = "";

        if (projectId === "showcase-stream") {
            content = `testing`;
        } else if (projectId === "showcase-st") {
            content = `
                <section class="project-head">
                    <h1 class="section-head">Integrated Digital Information Hub &#8212; Silver Talent</h1>
                    <ul class="overview">
                        <li>
                            <span>Timeline</span>
                            <span>Jan - Apr 2024</span>
                        </li>
                        <li>
                            <span>Role</span>
                            <span>Team lead, UI/UX design, Wireframing, Prototyping</span>
                        </li>
                        <li>
                            <span>Tool</span>
                            <span>Basecamp, Figma</span>
                        </li>
                    </ul>
                </section>
                <div class="color-block">
                    <section class="quicklook">
                        <span class="quicklook-head">A QUICK LOOK</span>
                        <ul class="quicklook-body">
                            <li>
                                <span>Objective</span>
                                <span>To develop a user-friendly website prototype for seniors to connect, access services, find jobs, engage in activities, and access health services across desktop and mobile platforms.</span>
                            </li>
                            <li>
                                <span>Deliverables</span>
                                <span>&#8209; High-fidelity wireframe</span>
                                <span>&#8209; Interactive prototype</span>
                                <span>&#8209; Deployment recommendation</span>
                            </li>
                        </ul>
                    </section>
                </div>           
                <section class="project-body">
                    <h2 class="section-head">Empowering Seniors: Designing an Interactive Digital Platform for Ottawa’s Aging Community</h2>
                    <div class="project-details">
                        <p>In a rapidly aging world, providing tailored resources and support for seniors is becoming increasingly critical. Silver Talent, a forward-thinking initiative, is addressing this need by developing an interactive digital platform specifically for seniors aged 60 and above in Ottawa, Canada. The platform is designed not only for the seniors themselves but also for their families and caregivers, offering essential information, services, and engagement opportunities. The overarching goal is to create a user-friendly website that seamlessly integrates across web and mobile platforms, catering to the diverse needs of this growing demographic.</p>
                    </div>
                </section>
                <section class="project-body">
                    <h2 class="section-head">Crafting a User-Centred Platform for Ottawa’s Seniors</h2>
                    <div class="project-details">
                        <p>Building on early foundational work, our focus shifted to developing a robust website prototype aimed at empowering seniors. This platform will help them connect with others, access health services, engage in activities, and even explore job opportunities. As the team leader, I played a key role in shaping the design of an interactive prototype that ensures accessibility and usability across both desktop and mobile devices.</p>
                        <p>The core of our efforts involved creating high-fidelity wireframes and an interactive prototype that brought the client’s vision to life. Our goal was to make sure seniors in Ottawa have easy access to valuable resources while staying connected to their community.</p>
                        <div class="img-block">
                            <img class="project-img" src="/media/silver_talent/st_website_simulation.jpg" alt="">
                        </div>
                    </div>
                </section>
                <section class="project-body">
                    <h2 class="section-head">Navigating Challenges: Client Communication and Project Adjustments</h2>
                    <div class="project-details">
                        <p>In both earlier and current stages of the project, the team encountered challenges with maintaining timely communication with the client. Due to delayed responses, the previous team was unable to progress with the design of high-fidelity wireframes, so this task fell to us. Rather than viewing this as a setback, we saw it as an opportunity to adapt, refining project objectives while managing expectations.</p>
                        <p>Our team worked proactively to <span class="highlight">clarify the scope of work</span> and <span class="highlight">align our design process</span> with the client’s evolving needs. Although some steps, such as user testing, were delayed by the absence of necessary assets, we focused on problem-solving and maintained constructive communication. This adaptability allowed us to deliver high-fidelity wireframes, an interactive prototype, and deployment recommendations, all while keeping the client’s vision in mind.</p>
                    </div>
                </section>
                <section class="project-body">
                    <h2 class="section-head">Collaborative Success: High-Fidelity Wireframes and Prototypes</h2>
                    <div class="project-details">
                        <p>Despite the challenges we faced, our team successfully delivered tangible results. Early identification of potential issues allowed us to address them head-on, ensuring seamless collaboration within the team. The high-fidelity wireframes and interactive prototypes demonstrated the potential of the platform, while client feedback was incorporated throughout the design process.</p>
                        <p>This collaborative environment fostered both creativity and innovation, resulting in a platform that meets the needs of Ottawa’s seniors.</p>
                        <div class="img-gallery-block">
                            <img class="project-img" src="/media/silver_talent/st_mobile_demo_home.png" alt="">
                            <img class="project-img" src="/media/silver_talent/st_mobile_demo_services.png" alt="">
                            <img class="project-img" src="/media/silver_talent/st_mobile_demo_about.png" alt="">
                            <img class="project-img" src="/media/silver_talent/st_mobile_demo_sign.png" alt="">
                        </div>
                    </div>
                </section>
                <section class="project-body">
                    <h2 class="section-head">Looking Ahead: Optimizing Communication and Features</h2>
                    <div class="project-details">
                        <p>As the project evolves, the client requested new features, including a dashboard to manage website content, language options, and an AI feature to offer user suggestions. To ensure success, we recommend:</p>
                        <ol>
                            <li class="listed-pt"><span class="list-title">User Testing:</span> Conduct further testing to validate usability and refine the design.</li>
                            <li class="listed-pt"><span class="list-title">Iterative Development:</span> Continuously improve the prototype based on feedback and changing requirements.</li>
                            <li class="listed-pt"><span class="list-title">Stakeholder Engagement:</span> Regularly consult seniors, caregivers, and service providers to ensure their needs are met.</li>
                            <li class="listed-pt"><span class="list-title">Accessibility:</span> Prioritize inclusive design, adhering to accessibility standards for all users.</li>
                            <li class="listed-pt"><span class="list-title">Scalability:</span> Plan for the platform’s future growth by selecting robust technologies and maintaining efficient coding practices.</li>
                        </ol>
                        <p>These steps will help ensure the platform is both user-friendly and future-proof, allowing for ongoing improvements and wider adoption.</p>
                    </div>
                </section>
                <section class="project-body">
                    <h2 class="section-head">Conclusion: Building a Future for Ottawa’s Seniors</h2>
                    <div class="project-details">
                        <p>Silver Talent’s initiative exemplifies how design can bridge the gap between seniors and the digital world. By creating a platform that is accessible, engaging, and tailored to their needs, we are empowering seniors to lead more connected and fulfilling lives. The insights gained during this phase, combined with the client’s evolving requirements, will guide the future of this project, ensuring that the final product truly serves the needs of Ottawa’s aging community.</p>
                    </div>
                </section>
            `;
        } else if (projectId === "showcase-ems") {
            content = `
                <section class="project-head">
                    <h1 class="section-head">Emergency Medical System &#8212; Saarthi</h1>
                    <ul class="overview">
                        <li>
                            <span>Timeline</span>
                            <span>Mar 2023</span>
                        </li>
                        <li>
                            <span>Role</span>
                            <span>Product design, UI/UX design, Wireframing</span>
                        </li>
                        <li>
                            <span>Tool</span>
                            <span>Slack, Miro, Adobe Illustrator</span>
                        </li>
                    </ul>
                </section>
                <div class="color-block">
                    <section class="quicklook">
                        <span class="quicklook-head">A QUICK LOOK</span>
                        <ul class="quicklook-body">
                            <li>
                                <span>Problem Statement</span>
                                <span>How might we improve the response time of emergency medical transportation services in urban India?</span>
                            </li>
                            <li>
                                <span>Solution</span>
                                <span>An emergency service mobile app which assists both injured and service providers to access emergency support such as location tracking and instant medical advice.</span>
                            </li>
                        </ul>
                    </section>
                </div>           
                <section class="project-body">
                    <h2 class="section-head">Designing for a Better Tomorrow: A Global Collaboration to Improve Emergency Medical Services in India</h2>
                    <div class="project-details">
                        <p>In a world facing complex global challenges like inequality and inadequate healthcare access, design can be a powerful tool for change. <a class="org-link" href="https://www.un.org/en/" target="_blank" rel="noopener noreferrer">The United Nations</a> (<abbr title="United Nations">UN</abbr>) created the <a class="org-link" href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">Sustainable Development Goals</a> (<abbr title="Sustainable Development Goals">SDG</abbr>) to address these urgent issues, calling for innovation to build a better world. Answering this call, <a class="org-link" href="https://wdo.org/" target="_blank" rel="noopener noreferrer">the World Design Organization</a> (<abbr title="World Design Organization">WDO</abbr>) hosted the World Design Challenge in March 2023, in partnership with <a class="org-link" href="https://www.algonquincollege.com/" target="_blank" rel="noopener noreferrer">Algonquin College</a> and <a class="org-link" href="https://www.upes.ac.in/" target="_blank" rel="noopener noreferrer">UPES University</a>.</p>
                        <p>I had the privilege to participate in this global challenge alongside international students. Our goal? To address a pressing issue and propose a design-driven solution. After extensive research and collaboration, we proposed a mobile app to improve emergency medical services (EMS) in urban India &#8212; a solution that could save lives by reducing delays in medical care.</p>
                    </div>
                </section>
                <section class="project-body">
                    <h2 class="section-head">Researching the Challenge: Fragmented Emergency Medical Systems in India</h2>
                    <div class="project-details">
                        <p>To align our project with the SDGs, we began by selecting Goal 9 (Industry, Innovation, and Infrastructure) and Goal 16 (Peace, Justice, and Strong Institutions) as our guiding frameworks. After brainstorming problem spaces, we chose to focus on the fragmented EMS in India, where 80% of trauma patients struggle to access definitive care within the critical Golden Hour.</p>
                        <p>Our research showed that 50% of trauma-related deaths could be averted with timely pre-hospital and emergency care. This alarming statistic drove our team to focus on improving EMS response times, ambulance coordination, and patient transfers.</p>
                    </div>
                </section>
                <section class="project-body">
                    <h2 class="section-head">Finding the Solution: A Human-Centred Approach to EMS</h2>
                    <div class="project-details">
                        <p>After diving deep into the problem space through <span class="highlight">affinity mapping</span> and system thinking, we identified opportunities for innovation. Using the <span class="highlight">Iceberg Model</span>, we uncovered the underlying causes of delayed EMS responses, such as lack of infrastructure and communication gaps between emergency services.</p>
                        <p>A problem statement was derived.</p>
                        <p class="statement">How might we improve the response time of emergency medical transportation services in urban India?</p>
                        <p>To address these issues, we developed a <span class="highlight">mobile application</span> designed to connect injured individuals with paramedics and nearby healthcare facilities. This app aims to reduce response times and improve coordination, potentially saving lives by ensuring timely medical intervention.</p>
                </section>
                <section class="project-body">
                    <h2 class="section-head">Innovating through Collaboration</h2>
                    <div class="project-details">
                        <p>One of the key strengths of this project was the <span class="highlight">collaborative process</span>. Working alongside international students brought diverse perspectives, helping us create a solution that could be adapted to different urban environments.</p>
                        <p>By employing creative design techniques like <span class="highlight">Crazy 8s</span>, we brainstormed numerous ideas before settling on the mobile app. This platform not only assists patients but also provides paramedics with real-time information, helping them navigate urban traffic and respond more effectively.</p>
                        <div class="img-block">
                            <img class="project-img" src="/media/wdc/wdc_iceberg_model.jpg" alt="">
                        </div>
                    </div>
                </section>
                <section class="project-body">
                    <h2 class="section-head">Pitching and Conclusion</h2>
                    <div class="project-details">
                        <p>This project highlights the potential of design innovation to solve critical global issues. By improving EMS systems through technology, we can contribute to achieving the SDGs and ultimately save lives. With continued research and development, this mobile app could transform emergency medical care in urban India.</p>
                        <p>And proudly, we won the 3rd place in the challenge.</p>
                        <div class="img-block">
                            <img class="project-img" src="/media/wdc/wdc_pitch_1.jpg" alt="">
                            <img class="project-img" src="/media/wdc/wdc_pitch_2.jpg" alt="">
                            <img class="project-img" src="/media/wdc/wdc_pitch_3.jpg" alt="">
                            <img class="project-img" src="/media/wdc/wdc_pitch_4.jpg" alt="">
                            <img class="project-img" src="/media/wdc/wdc_pitch_5.jpg" alt="">
                            <img class="project-img" src="/media/wdc/wdc_pitch_6.jpg" alt="">
                            <img class="project-img" src="/media/wdc/wdc_pitch_7.jpg" alt="">
                            <img class="project-img" src="/media/wdc/wdc_pitch_8.jpg" alt="">
                        </div>
                    </div>                
                </section>
            `;
        }

        console.log(projectId + " displayed")
        
        showcaseContainer.innerHTML = content;
        showcaseContainer.style.display = 'block';

        scrollToTop()
    }

    // Event delegation for "MORE" buttons using event bubbling
    mainBrief.addEventListener('click', function (e) {
        const moreButton = e.target.closest('.more'); // Changed target to moreButton
        
        if (moreButton) {
            e.preventDefault();
    
            const projectId = moreButton.getAttribute('data-project');
            
            // Hide the main brief section
            mainBrief.style.display = 'none';
    
            // Load the showcase content
            createShowcaseContent(projectId);
        }
    });

    // Call this function after updating the mainBrief
    showMainBrief(); // This is where the content is added dynamically

})