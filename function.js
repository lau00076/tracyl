document.addEventListener("DOMContentLoaded", function () {
    const navHome = document.getElementById('home');
    const toTop = document.getElementById('to-top')
    const mainPage = document.querySelector('.main-page');
    const showcaseContainer = document.getElementById('showcaseContainer');

    const projects = [
        {
            title: "infoStream",
            date: "2024",
            summary: "A centralised platform was designed to improve access to public service announcements in Ottawa, enhancing transparency and user safety with research-driven design and an interactive prototype.",
            tags: ["UX Research", "UI/UX design", "Prototyping"],
            link: "/showcase-infoStream",
            projectLink: "showcase-stream"
        },
        {
            title: "Silver Talent",
            date: "2024",
            summary: "Silver Talent is creating a digital platform for seniors in Ottawa, offering personalised resources and engagement. The project includes a user-friendly website with high-fidelity prototypes and deployment recommendations.",
            tags: ["UI/UX design", "Wireframing", "Prototyping"],
            link: "/showcase-SilverTalent",
            projectLink: "showcase-st"
        },
        {
            title: "EMS — Saarthi",
            date: "2023",
            summary: "World Design Organisation (WDO) hosted the World Design Challenge in March 2023. I collaborated with international students to design a mobile app aimed at improving the medical system in urban India.",
            tags: ["UI/UX design", "Wireframing", "International project"],
            link: "/showcase-EMS",
            projectLink: "showcase-ems"
        }
    ];

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Create project-brief content
    function createProjectBrief(title, date, summary, tags, link, projectLink) {
        // Create a markup for the tags
        const tagMarkup = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
        return `
            <div class="project-brief">
                <div class="project-head">
                    <div class="project-title">
                        <h1>${title}</h1>
                        <h1 class="date">${date}</h1>
                    </div>
                    <div class="project-summary">
                        <p>${summary}</p>
                    </div>
                </div>
                <div class="project-foot">
                    <div class="project-tag">${tagMarkup}</div>
                    <button href="${link}" class="more" data-project="${projectLink}"><p>MORE <i class="fa-solid fa-arrow-right-long"></i></p></button>
                </div>
            </div>
        `;
    }
    
    function createMainPage() {
        mainPage.style.display = 'block';
        showcaseContainer.style.display = 'none';
    
        // Create the header
        let content = `
            <div class="main-head">
                <h1>Projects</h1>
                <i class="fa-solid fa-caret-down"></i>
            </div>
        `;
    
        // Iterate over the projects array
        projects.forEach(project => {
            content += `
                ${createProjectBrief(project.title, project.date, project.summary, project.tags, project.link, project.projectLink)}
                <hr>
            `;
        });
    
        mainPage.innerHTML = content;    
        scrollToTop();
    }    

    // Add click event listener to "home" link
    navHome.addEventListener('click', function(e) {
        e.preventDefault();
        createMainPage();
    });

    // Add click event listener to "to-top" link
    toTop.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToTop();
    });

    // Function to display the showcase content
    function createShowcaseContent(projectId) {
        let content = '';

        switch (projectId) {
            case 'showcase-stream':
                content = getInfoStreamContent();
                break;
            case 'showcase-st':
                content = getSilverTalentContent();
                break;
            case 'showcase-ems':
                content = getEmsSaarthiContent();
                break;
        }

        showcaseContainer.innerHTML = content;
        showcaseContainer.style.display = 'block';
        mainPage.style.display = 'none';
        scrollToTop();
    }

    // Generate individual showcase projects
    function getInfoStreamContent() {
        return `
            <section class="project-head">
                <a id="back-home" href="/home"><i class="fa-solid fa-arrow-left-long"></i><p>BACK</p></a>
                <h1 class="section-head">Public Service Annoucement &#8212; infoStream</h1>
                <span class="co-operator">
                    <p>Co-operator:</p>
                    <p><a class="external-link" href="https://www.behance.net/gallery/209977849/UIUX-infoStream" target="_blank" rel="noopener noreferrer">Vicky Fong <i class="fa-brands fa-square-behance"></i><a></p>
                </span>
                <ul class="overview">
                    <li>
                        <span>Timeline</span>
                        <span>Jan - Jul 2023</span>
                    </li>
                    <li>
                        <span>Role</span>
                        <span>UX research, Product design, UI design, Prototyping</span>
                    </li>
                    <li>
                        <span>Tool</span>
                        <span>AI, Figma, Google Form</span>
                    </li>
                </ul>
            </section>
            <section class="color-block">
                <div class="quicklook">
                    <span class="quicklook-head">A QUICK LOOK</span>
                    <ul class="quicklook-body">
                        <li>
                            <span>Problem Statement</span>
                            <span>In Ottawa, citizens face inconvenience, stress, and safety concerns in their daily lives due to the inadequacy of current public service announcements, such as power outage, water disruption, traffic incidents, etc. This is because dispersed and imprecise information makes it difficult for them to effectively respond to emergencies when accidents or unexpected events occur, leading to disruptions in their daily routines and delays in important events.</span>
                        </li>
                        <li>
                            <span>Solution</span>
                            <span>A centralised platform that provides easy access to critical updates during emergencies through a filter function, ensuring relevant information is quickly accessible.</span>
                        </li>
                    </ul>
                </div>
            </section>           
            <section class="project-body">
                <h2 class="section-head">Creating a Centralised Hub for Public Service Announcements in Ottawa</h2>
                <div class="project-details">
                    <p>Ever found it hard to stay updated on essential public services? I did. During my time in Ottawa, Canada, it was frustrating trying to track down critical information, whether it was about weather warnings or transit updates. This sparked the idea to develop a solution—a centralised platform that simplifies public service announcements for the community.</p>
                </div>
            </section>
            <section class="project-body">
                <h2 class="section-head">Research-Driven Design</h2>
                <div class="project-details">
                    <p>Before diving into wireframes and prototypes, my team and I took a research-first approach. We knew we weren’t the only ones facing this challenge, so we started with social media to explore how others handled public service announcements. Our suspicions were confirmed—people felt disconnected, often missing out on important updates.</p>
                    <p>We also checked out existing services to see what they offered and where they fell short. From there, we created a comprehensive survey that aimed to answer key questions: How do people currently receive updates? How are they impacted by delayed or inaccurate information? Are they satisfied with the current methods? Understanding these insights helped us shape the user experience and design features.</p>
                </div>
            </section>
            <section class="project-body">
                <h2 class="section-head">Survey Insights: Enhancing Reliability and Clarity</h2>
                <div class="project-details">
                    <p>The survey revealed that reliability was a top concern for users, so we prioritised that in our design. For example, we added source verification to make sure the information was trustworthy and created user feedback loops for continuous improvement. We also found that users needed better ways to visualise progress, whether tracking a power outage or following emergency updates. Using data visualisation techniques became an important feature to boost both user engagement and clarity.</p>
                    <p>As public services like Hydro, transportation, and internet disruptions were significant pain points, we made sure these updates were front and center in our app design.</p>
                </div>
            </section>
            <section class="img-gp">
                <div class="img-intro">
                    <p>Mind-map is a good tool to draft a questionnaire.</p>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <div class="img-block">
                    <img class="project-img" src="./media/info_stream/questionnaire_design.png" alt="Mind-map is a good tool to draft a questionnaire.">
                </div>
            </section>
            <section class="project-body">
                <h2 class="section-head">From Wireframes to Prototypes: A User-Centered Journey</h2>
                <div class="project-details">
                    <p>We didn’t just jump into wireframes. The team worked through <span class="highlight">user personas</span>, <span class="highlight">flow diagrams</span>, and <span class="highlight">journeys</span> to ensure we were solving the right problems for the right people. This careful planning shaped both our <span class="highlight">low-fidelity</span> and <span class="highlight">high-fidelity wireframes</span>. Each iteration was a chance to revisit our original research and ask, “Is this truly addressing the user’s needs?” This constant refinement helped us stay focused and create a prototype that was both functional and intuitive.</p>
                </div>
            </section>
            <section class="img-gp">
                <div class="img-intro">
                    <p>We drew user journeys based on the survey.</p>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <div class="img-block">
                    <img class="project-img" src="./media/info_stream/user_journey-primary.png" alt="User journey of primary market.">
                    <img class="project-img" src="./media/info_stream/user_journey-secondary.png" alt="User journey of secondary market.">
                    <img class="project-img" src="./media/info_stream/user_journey-accessibility.png" alt="User journey of target market with accessibility need.">
                </div>
            </section>
            <section class="project-body">
                <h2 class="section-head">Practical Applications for a Safer, More Informed Ottawa</h2>
                <div class="project-details">
                    <p>In this project, the goal was always more than just creating a product; it was about enhancing safety and improving daily life for Ottawa citizens. From extreme weather warnings to utility disruptions, our centralised platform aimed to make accessing critical updates simpler and faster. It’s a solution that not only minimises stress but also keeps people informed and prepared.</p>
                </div>
            </section>
            <section class="img-gp">
                <div class="img-intro">
                    <p>Low-fedility wireframes are drafted.</p>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <div class="img-gallery-block">
                    <img class="project-img" src="./media/info_stream/low-fi/home_hydro.png" alt="Example of low-fi wireframes: home page">
                    <img class="project-img" src="./media/info_stream/low-fi/home_internet.png" alt="Example of low-fi wireframes: home page">
                    <img class="project-img" src="./media/info_stream/low-fi/home_traffic_pop-up.png" alt="Example of low-fi wireframes: home page">
                    <img class="project-img" src="./media/info_stream/low-fi/low_internet.png" alt="Example of low-fi wireframes: low internet mode">
                </div>
                <div class="img-intro">
                    <p>And high-fidelity wireframes are designed.</p>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <div class="img-gallery-block">
                    <img class="project-img" src="./media/info_stream/hi-fi/home_main-page.png" alt="Example of high-fi wireframes: home page">
                    <img class="project-img" src="./media/info_stream/hi-fi/home_hydro_pop-up.png" alt="Example of high-fi wireframes: home page">
                    <img class="project-img" src="./media/info_stream/hi-fi/home_hydro_pop-up_feedback.png" alt="Example of high-fi wireframes: home page">
                    <img class="project-img" src="./media/info_stream/hi-fi/low_internet.png" alt="Example of high-fi wireframes: low internet mode">
                </div>
            </section>
            <section class="project-body">
                <h2 class="section-head">Key Learnings and Next Steps</h2>
                <div class="project-details">
                    <p>Working on this project gave us hands-on experience with research, analytics, and user-focused design. We learned to identify problems early on, propose solutions, and collaborate seamlessly as a team. These lessons translated into an <span class="highlight">interactive prototypes</span> ready for testing.</p>
                    <p>By maintaining the research-driven foundation of the project, we suggested a tool that we believe can significantly improve how people access public service information. Looking ahead, the user experience and accessibility will continue to be a focus when we refine the platform.</p>
                </div>
            </section>
            <section class="img-gp">
                <div class="img-intro">
                    <p>A poster is well designed for pitching and launched on Behance <a href="https://www.behance.net/gallery/209977849/UIUX-infoStream" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-behance"></i><a>.</p>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <div class="img-block">
                    <img class="project-img" src="./media/info_stream/pitch.png" alt="A poster is designed for pitching.">
                </div>
            </section>
        `;
    }

    function getSilverTalentContent() {
        return `
            <section class="project-head">
                <a id="back-home" href="/home"><i class="fa-solid fa-arrow-left-long"></i><p>BACK</p></a>
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
            <section class="color-block">
                <div class="quicklook">
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
                </div>
            </section>           
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
                </div>
            </section>
            <section class="img-gp">
                <div class="img-intro">
                    <p>We simulate the home page in different devices.</p>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <div class="img-block">
                    <img class="project-img" src="./media/silver_talent/st_website_simulation.jpg" alt="Simulation of Silvent Talent website.">
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
                </div>
            </section>
            <section class="img-gp">
                <div class="img-intro">
                    <p>Mobile-first demostration is preferred.</p>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <div class="img-gallery-block">
                    <img class="project-img" src="./media/silver_talent/st_mobile_demo_home.png" alt="Silver Talent home page mobile mock up.">
                    <img class="project-img" src="./media/silver_talent/st_mobile_demo_services.png" alt="Silver Talent service page mobile mock up.">
                    <img class="project-img" src="./media/silver_talent/st_mobile_demo_about.png" alt="Silver Talent about page mobile mock up.">
                    <img class="project-img" src="./media/silver_talent/st_mobile_demo_sign.png" alt="Silver Talent sign-up page mobile mock up.">
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
                        <li class="listed-pt"><span class="list-title">Accessibility:</span> Prioritise inclusive design, adhering to accessibility standards for all users.</li>
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
    }

    function getEmsSaarthiContent() {
        return `
            <section class="project-head">
                <a id="back-home" href="/home"><i class="fa-solid fa-arrow-left-long"></i><p>BACK</p></a>
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
                            <span>Problem Frame</span>
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
                    <p>In a world facing complex global challenges like inequality and inadequate healthcare access, design can be a powerful tool for change. <a class="external-link" href="https://www.un.org/en/" target="_blank" rel="noopener noreferrer">The United Nations</a> (<abbr title="United Nations">UN</abbr>) created the <a class="external-link" href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">Sustainable Development Goals</a> (<abbr title="Sustainable Development Goals">SDG</abbr>) to address these urgent issues, calling for innovation to build a better world. Answering this call, <a class="external-link" href="https://wdo.org/" target="_blank" rel="noopener noreferrer">the World Design Organization</a> (<abbr title="World Design Organization">WDO</abbr>) hosted the World Design Challenge in March 2023, in partnership with <a class="external-link" href="https://www.algonquincollege.com/" target="_blank" rel="noopener noreferrer">Algonquin College</a> and <a class="external-link" href="https://www.upes.ac.in/" target="_blank" rel="noopener noreferrer">UPES University</a>.</p>
                    <p>I had the privilege to participate in this global challenge alongside international students. Our goal? To address a pressing issue and propose a design-driven solution. After extensive research and collaboration, we proposed a mobile app to improve emergency medical services (<abbr title="emergency medical services">EMS</abbr>) in urban India &#8212; a solution that could save lives by reducing delays in medical care.</p>
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
                    <p>A HMW question was derived.</p>
                    <p class="statement">How might we improve the response time of emergency medical transportation services in urban India?</p>
                    <p>To address these issues, we developed a <span class="highlight">mobile application</span> designed to connect injured individuals with paramedics and nearby healthcare facilities. This app aims to reduce response times and improve coordination, potentially saving lives by ensuring timely medical intervention.</p>
            </section>
            <section class="project-body">
                <h2 class="section-head">Innovating through Collaboration</h2>
                <div class="project-details">
                    <p>One of the key strengths of this project was the <span class="highlight">collaborative process</span>. Working alongside international students brought diverse perspectives, helping us create a solution that could be adapted to different urban environments.</p>
                    <p>By employing creative design techniques like <span class="highlight">Crazy 8s</span>, we brainstormed numerous ideas before settling on the mobile app. This platform not only assists patients but also provides paramedics with real-time information, helping them navigate urban traffic and respond more effectively.</p>
                </div>
            </section>
            <section class="img-gp">
                <div class="img-intro">
                    <p>We used icebery model to dig into the issue.</p>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <div class="img-block">
                    <img class="project-img" src="./media/wdc/wdc_iceberg_model.jpg" alt="Iceberg model as a systems thinking tool to uncovered the underlying causes.">
                </div>
            </section>
            <section class="project-body">
                <h2 class="section-head">Pitching and Conclusion</h2>
                <div class="project-details">
                    <p>This project highlights the potential of design innovation to solve critical global issues. By improving EMS systems through technology, we can contribute to achieving the SDGs and ultimately save lives. With continued research and development, this mobile app could transform emergency medical care in urban India.</p>
                    <p>And proudly, we won the 3rd place in the challenge.</p>
                </div>                
            </section>
            <section class="img-gp">
                <div class="img-intro">
                    <p>Our pitching won the 3rd place!</p>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <div class="img-block">
                    <img class="project-img" src="./media/wdc/wdc_pitch_1.jpg" alt="Presentation for WDC #1">
                    <img class="project-img" src="./media/wdc/wdc_pitch_2.jpg" alt="Presentation for WDC #2.">
                    <img class="project-img" src="./media/wdc/wdc_pitch_3.jpg" alt="Presentation for WDC #3.">
                    <img class="project-img" src="./media/wdc/wdc_pitch_4.jpg" alt="Presentation for WDC #4.">
                    <img class="project-img" src="./media/wdc/wdc_pitch_5.jpg" alt="Presentation for WDC #5.">
                    <img class="project-img" src="./media/wdc/wdc_pitch_6.jpg" alt="Presentation for WDC #6.">
                    <img class="project-img" src="./media/wdc/wdc_pitch_7.jpg" alt="Presentation for WDC #7.">
                    <img class="project-img" src="./media/wdc/wdc_pitch_8.jpg" alt="Presentation for WDC #8.">
                </div>
            </section>
    `;
    }

    // Event delegation for "MORE" buttons using event bubbling
    document.addEventListener('click', function (e) {
        const moreButton = e.target.closest('.more');
        const backHome = e.target.closest('#back-home') 
        
        if (moreButton) {
            e.preventDefault();
    
            const projectId = moreButton.getAttribute('data-project');

            mainPage.style.display = 'none';

            createShowcaseContent(projectId);
        }

        if (backHome) {
            e.preventDefault();
            createMainPage();
        }
    });

    createMainPage(); 

})