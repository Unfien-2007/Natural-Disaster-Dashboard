    // Sample disaster news data
        const disasterNews = [
            {
                id: 1,
                title: "Magnitude 6.5 Earthquake Strikes Metropolitan Region",
                description: "A significant earthquake measuring 6.5 on the Richter scale was detected early this morning. Authorities are assessing damage and coordinating rescue operations.",
                category: "Earthquake",
                severity: "high",
                date: "Nov 18, 2025",
                icon: "🌍",
                casualties: 125,
                injured: 450,
                displaced: 8500,
                affectedArea: "Metropolitan Region - 50km radius",
                fullDetails: "A devastating 6.5 magnitude earthquake struck the metropolitan region at 6:45 AM local time. The quake caused significant structural damage to buildings, roads, and infrastructure. Emergency response teams are actively searching for survivors in collapsed structures. Power outages affect approximately 60% of the region.",
                recommendations: "Residents are advised to check on neighbors, avoid damaged buildings, and follow instructions from local authorities. Use emergency services only for critical needs."
            },
            {
                id: 2,
                title: "Severe Flooding in Coastal Areas Following Heavy Rains",
                description: "Multiple regions face serious flooding as torrential rains continue. Emergency services are working to evacuate residents from affected areas.",
                category: "Flooding",
                severity: "high",
                date: "Nov 17, 2025",
                icon: "🌊",
                casualties: 45,
                injured: 120,
                displaced: 12000,
                affectedArea: "Coastal zones and low-lying areas - 3 counties",
                fullDetails: "Continuous rainfall over 36 hours has caused river levels to exceed safety thresholds. Multiple communities have been evacuated as floodwaters continue to rise. Roads and bridges are inaccessible, hampering rescue operations and supply distribution.",
                recommendations: "Move to higher ground immediately if in flood-prone areas. Do not attempt to cross flooded roads or waterways. Contact local emergency services for evacuation assistance."
            },
            {
                id: 3,
                title: "Typhoon Warning Issued for Eastern Coast",
                description: "Meteorological agencies have issued a typhoon warning. Residents are advised to secure their homes and prepare emergency kits.",
                category: "Typhoon",
                severity: "high",
                date: "Nov 16, 2025",
                icon: "🌪️",
                casualties: 0,
                injured: 12,
                displaced: 3200,
                affectedArea: "Eastern Coast - 100km inland",
                fullDetails: "A Category 4 typhoon is expected to make landfall within 24 hours. Wind speeds are predicted to reach 180 km/h with heavy rainfall expected. Preparations are underway to secure critical infrastructure and coordinate evacuations.",
                recommendations: "Stock up on food, water, and medications. Secure loose outdoor items. Stay indoors during the typhoon. Monitor weather updates and follow evacuation orders."
            },
            {
                id: 4,
                title: "Wildfires Continue to Spread in Forest Regions",
                description: "Multiple wildfires are spreading rapidly across forested areas. Air quality warnings have been issued for surrounding communities.",
                category: "Wildfire",
                severity: "medium",
                date: "Nov 15, 2025",
                icon: "🔥",
                casualties: 2,
                injured: 58,
                displaced: 4200,
                affectedArea: "Forest region - 250 sq km",
                fullDetails: "Dry weather conditions and high temperatures have accelerated the spread of wildfires across three forest regions. Firefighting crews are working around the clock to contain the flames. Air quality has deteriorated significantly with smoke spreading to nearby urban areas.",
                recommendations: "Wear N95 masks when outdoors. Keep windows and doors closed. Avoid outdoor activities. Have evacuation plans ready if you live near forest areas."
            },
            {
                id: 5,
                title: "Volcanic Activity Detected Near Active Zone",
                description: "Increased seismic activity has been recorded near the volcanic zone. Evacuation zones have been established as a precautionary measure.",
                category: "Volcano",
                severity: "medium",
                date: "Nov 14, 2025",
                icon: "🌋",
                casualties: 0,
                injured: 5,
                displaced: 2800,
                affectedArea: "Volcanic zone - 15km radius exclusion zone",
                fullDetails: "Monitoring stations have recorded a 40% increase in seismic activity around the volcano. Ground deformation has been detected on the northern slope. Scientists are working to assess whether an eruption is imminent.",
                recommendations: "Evacuate immediately if in exclusion zone. Have important documents and valuables ready. Stay in contact with local authorities for updates on evacuation orders."
            },
            {
                id: 6,
                title: "Landslide Risk Alert for Mountainous Areas",
                description: "Heavy rainfall has increased the risk of landslides in mountainous regions. Residents are urged to remain vigilant and evacuate if necessary.",
                category: "Landslide",
                severity: "medium",
                date: "Nov 13, 2025",
                icon: "⛰️",
                casualties: 8,
                injured: 22,
                displaced: 1500,
                affectedArea: "Mountainous region - 5 counties",
                fullDetails: "Continued heavy rainfall has saturated the soil in mountainous areas, significantly increasing landslide risk. Several minor slides have already occurred, blocking roads and damaging homes. Geologists warn of higher risk during the next rain event.",
                recommendations: "Avoid steep hillsides and valleys. Listen for unusual sounds that may indicate imminent landslides. Be prepared to evacuate quickly from at-risk zones."
            }
        ];

        // Emergency contacts data
        const emergencyContacts = [
            {
                name: "National Disaster Response",
                number: "911",
                type: "🚨"
            },
            {
                name: "Medical Emergency",
                number: "118",
                type: "🏥"
            },
            {
                name: "Fire Department",
                number: "113",
                type: "🚒"
            },
            {
                name: "Disaster Management Authority",
                number: "1234-567-8900",
                type: "📱"
            },
            {
                name: "Community Safety Hotline",
                number: "1-800-SAFETY",
                type: "☎️"
            },
            {
                name: "Red Cross Services",
                number: "1-800-REDCROSS",
                type: "🔴"
            }
        ];

        // Render news articles
        function renderNews() {
            const container = document.getElementById('articlesContainer');
            
            if (filteredNews.length === 0) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 40px; background: white; border-radius: 12px; color: #666;">
                        <p style="font-size: 1.2em; margin-bottom: 10px;">🔍 No disasters found</p>
                        <p>Try adjusting your search terms</p>
                    </div>
                `;
                return;
            }
            
            container.innerHTML = filteredNews.map(article => `
                <div class="article-card" onclick="openModal(${article.id})">
                    <div class="article-image">${article.icon}</div>
                    <div class="article-content">
                        <div>
                            <div class="article-category">${article.category}</div>
                            <h3 class="article-title">${article.title}</h3>
                            <p class="article-description">${article.description}</p>
                        </div>
                        <div class="article-footer">
                            <span>${article.date}</span>
                            <span class="severity ${article.severity.toLowerCase()}">${article.severity.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Render emergency contacts
        function renderEmergencyContacts() {
            const container = document.getElementById('emergencyContainer');
            container.innerHTML = emergencyContacts.map(contact => `
                <div class="emergency-card">
                    <h3>${contact.name}</h3>
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="contact-icon">${contact.type}</span>
                            <div class="contact-text">
                                <span class="contact-label">Call immediately:</span>
                                <span class="contact-value">${contact.number}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Open modal with article details
        function openModal(articleId) {
            const article = disasterNews.find(a => a.id === articleId);
            if (!article) return;

            document.getElementById('modalIcon').textContent = article.icon;
            document.getElementById('modalCategory').textContent = article.category;
            document.getElementById('modalTitle').textContent = article.title;
            document.getElementById('modalDate').textContent = article.date;
            document.getElementById('modalSeverity').textContent = article.severity.toUpperCase();
            document.getElementById('modalSeverity').className = `severity ${article.severity.toLowerCase()}`;

            const modalBody = document.getElementById('modalBody');
            modalBody.innerHTML = `
                <div class="modal-section">
                    <h3>Overview</h3>
                    <p>${article.fullDetails}</p>
                </div>

                <div class="modal-section">
                    <h3>Impact Statistics</h3>
                    <div class="stats-grid">
                        <div class="stat-box">
                            <span class="stat-number">${article.casualties}</span>
                            <span class="stat-label">Casualties</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-number">${article.injured}</span>
                            <span class="stat-label">Injured</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-number">${article.displaced.toLocaleString()}</span>
                            <span class="stat-label">Displaced</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-number">${article.affectedArea}</span>
                            <span class="stat-label">Affected Area</span>
                        </div>
                    </div>
                </div>

                <div class="modal-section">
                    <h3>Safety Recommendations</h3>
                    <p>${article.recommendations}</p>
                </div>
            `;

            document.getElementById('articleModal').classList.add('active');
        }

        // Close modal
        function closeModal() {
            document.getElementById('articleModal').classList.remove('active');
        }

        // Close modal when clicking outside of it
        window.onclick = function(event) {
            const modal = document.getElementById('articleModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Search functionality
        let filteredNews = [...disasterNews];

        function filterNews(searchTerm) {
            if (!searchTerm.trim()) {
                filteredNews = [...disasterNews];
            } else {
                const term = searchTerm.toLowerCase();
                filteredNews = disasterNews.filter(article => 
                    article.title.toLowerCase().includes(term) ||
                    article.category.toLowerCase().includes(term) ||
                    article.description.toLowerCase().includes(term) ||
                    article.affectedArea.toLowerCase().includes(term)
                );
            }
            renderNews();
        }

        // Search input event listener
        document.addEventListener('DOMContentLoaded', () => {
            renderNews();
            renderEmergencyContacts();

            const searchInput = document.getElementById('searchInput');
            const clearSearch = document.getElementById('clearSearch');

            searchInput.addEventListener('input', (e) => {
                const value = e.target.value;
                filterNews(value);
                clearSearch.style.display = value ? 'flex' : 'none';
            });

            clearSearch.addEventListener('click', () => {
                searchInput.value = '';
                clearSearch.style.display = 'none';
                filterNews('');
            });

            // Smooth scroll for navigation links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const href = link.getAttribute('href');
                    if (href.startsWith('#')) {
                        const targetId = href.substring(1);
                        const targetElement = document.getElementById(targetId) || 
                            (targetId === 'home' ? document.querySelector('.container') : null) ||
                            (targetId === 'disasters' ? document.querySelector('.news-section') : null) ||
                            (targetId === 'emergency' ? document.querySelector('.emergency-section') : null) ||
                            (targetId === 'about' ? document.querySelector('.about-section') : null);
                        
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }
                    
                    // Update active state
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                });
            });
        });