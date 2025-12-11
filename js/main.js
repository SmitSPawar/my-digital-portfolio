document.addEventListener('DOMContentLoaded', () => {
    renderContent();
});

function renderContent() {
    // Hero Bio
    document.getElementById('hero-bio').textContent = content.about.description;

    // Social Links
    document.getElementById('email-link').href = content.profile.social.email;
    document.getElementById('linkedin-link').href = content.profile.social.linkedin;
    document.getElementById('github-link').href = content.profile.social.github;

    // About Section
    document.getElementById('about-description').textContent = content.about.description;

    // Experience Section
    const expList = document.getElementById('experience-list');
    content.experience.forEach(job => {
        const item = document.createElement('div');
        item.className = 'glass-card';
        item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; margin-bottom: 0.5rem;">
                <h3 style="font-size: 1.5rem; color: var(--text-primary);">${job.role}</h3>
                <span style="color: var(--text-accent); font-family: var(--font-main); font-size: 0.9rem;">${job.period}</span>
            </div>
            <h4 style="font-size: 1.1rem; color: var(--text-secondary); font-weight: 500; margin-bottom: 1rem;">${job.company}</h4>
            <p style="color: var(--text-secondary);">${job.description}</p>
        `;
        expList.appendChild(item);
    });

    // Projects Section
    const projGrid = document.getElementById('projects-grid');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalTags = document.getElementById('modal-tags');
    const modalDesc = document.getElementById('modal-description');
    const modalRespList = document.getElementById('modal-responsibilities-list');
    const closeBtn = document.querySelector('.close-btn');

    content.projects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'glass-card';
        card.innerHTML = `
            <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem; color: var(--text-primary);">${proj.title}</h3>
            <p style="font-size: 0.95rem; margin-bottom: 1.5rem; color: var(--text-secondary);">${proj.description}</p>
            <div style="margin-bottom: 1.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${proj.tags.map(tag => `
                    <span style="font-size: 0.8rem; color: var(--text-accent); background: rgba(56, 189, 248, 0.1); padding: 0.2rem 0.6rem; border-radius: 4px;">#${tag}</span>
                `).join('')}
            </div>
            <button class="btn-white view-details-btn" style="font-size: 0.9rem; padding: 0.5rem 1rem; background: transparent; border: 1px solid rgba(255,255,255,0.2); color: white; cursor: pointer;">View Details</button>
        `;

        // Add Event Listener for Modal
        const btn = card.querySelector('.view-details-btn');
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modalTitle.textContent = proj.title;
            modalDesc.textContent = proj.description;

            // Populate Tags
            modalTags.innerHTML = proj.tags.map(tag => `
                <span style="font-size: 0.8rem; color: var(--text-accent); background: rgba(56, 189, 248, 0.1); padding: 0.2rem 0.6rem; border-radius: 4px;">#${tag}</span>
            `).join('');

            // Populate Responsibilities
            if (proj.responsibilities && proj.responsibilities.length > 0) {
                modalRespList.innerHTML = proj.responsibilities.map(item => `<li>${item}</li>`).join('');
                document.querySelector('.modal-responsibilities').style.display = 'block';
            } else {
                modalRespList.innerHTML = '';
                document.querySelector('.modal-responsibilities').style.display = 'none';
            }

            modal.classList.add('show');
        });

        projGrid.appendChild(card);
    });

    // Close Modal Logic
    closeBtn.onclick = () => {
        modal.classList.remove('show');
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.classList.remove('show');
        }
    }

    // Contact Section
    document.getElementById('contact-text').textContent = content.contact.description;
    document.getElementById('contact-btn').href = content.profile.social.email;
}
