    // Sample disaster news data
        const disasterNews = [
            {
                id: 1,
                title: "Cebu earthquake death toll rises to 72; aftershocks continue.",
                description: "MANILA, Philippines — The death toll from the magnitude 6.9 earthquake that struck Cebu has risen to 72, according to the latest situational report released by authorities on Thursday, Oct. 2.",
                category: "Earthquake",
                severity: "high",
                date: "Nov 18, 2025",
                icon: "🌍",
                casualties: 53,
                injured: 294,
                displaced: 170959,
                affectedArea: "(Bogo City, Cebu)",
                fullDetails: "The magnitude 6.9 earthquake in Cebu has killed 72 people and injured 294, based on the latest NDRRMC report. Over 170,000 individuals were affected, and 53 cities and municipalities are under a state of calamity. More than 2,600 aftershocks have been recorded since the quake hit Bogo City on Sept. 30.",
                recommendations: "Stay away from damaged buildings and structures because aftershocks can still cause them to collapse. Keep an emergency kit with water, food, flashlight, and a first-aid kit. Always follow official updates from NDRRMC and local authorities for evacuation orders and safety reminders."
            },
            {
                id: 2,
                title: "Dangerous rains over Cebu - PAGASA: ‘Verbena’ may trigger flashfloods.",
                description: "Multiple regions face serious flooding as torrential rains continue. Emergency services are working to evacuate residents from affected areas.",
                category: "Flooding",
                severity: "high",
                date: "November 24–25, 2025",
                icon: "🌊",
                casualties: 0,
                injured: 0,
                displaced: 10000,
                affectedArea: "(Cebu City, Mandaue City, Lapu-Lapu City, and nearby municipalities. Rivers - Butuanon, Mahiga)",
                fullDetails: "Tropical Depression Verbena may bring 100–200 mm of rainfall, enough to cause serious flooding and landslides, especially since Cebu’s rivers and drainage systems are clogged after Typhoon Tino. Multiple LGUs (Cebu City, Mandaue, Lapu-Lapu) are now under Red Alert, enforcing pre-emptive evacuations and preparing evacuation centers. Authorities warn residents to monitor flash floods, avoid riverbanks, and expect torrential rain from late evening until early morning.",
                recommendations: "Residents should evacuate early if living in flood-prone or riverside areas, avoid crossing rivers or flooded roads, keep emergency kits ready with water, food, flashlight, and medicine, secure loose objects like tarpaulins and signboards, and stay updated with PAGASA and local government alerts."
            },
            {
                id: 3,
                title: "Philippines: Super Typhoon Uwan/Fung-Wong ",
                description: "The Philippines continues to recover from back-to-back disasters, including Typhoon Tino and Super Typhoon Uwan, which caused massive flooding, displacement, and agricultural losses.",
                category: "Typhoon",
                severity: "high",
                date: " November 20, 2025",
                icon: "🌪️",
                casualties: 250,
                injured: 0,
                displaced: 271200,
                affectedArea: "(Visayas, Aurora, and 16 of 18 regions in the Philippines; majorly Cebu, Leyte, Palawan)",
                fullDetails: "Typhoon Tino and Super Typhoon Uwan caused massive flooding, landslides, and displacement. The education sector was heavily affected, with class suspensions impacting 17 million learners. Agriculture suffered major losses: $53.7 million from Uwan and $16.4 million from Tino, affecting over 84,000 farmers and fisherfolk. Multiple disasters since late September, including earthquakes and other typhoons, have strained disaster response capacities.",
                recommendations: "Residents should evacuate early if they live in high-risk areas, especially near rivers or flood-prone zones, and they should avoid unnecessary travel during storms, including crossing rivers or flooded roads. They must secure their homes and tie or remove loose objects such as tarpaulins and signboards. Emergency kits with water, food, flashlights, and medicine should always be ready, and everyone must stay updated with PAGASA and local government alerts. Health precautions should be prioritized, especially for displaced populations, and relief distribution must be coordinated properly to ensure safety and efficiency."
            },
            {
                id: 4,
                title: "Wildfire Razes Section of Mountain in Zambales Tourist Town",
                description: "A wildfire struck a section of a mountain in Barangay Pundaquit, San Antonio, Zambales. The fire burned for several days and was manually contained by firefighters using boats and trekking up the mountain. Residents suspect it may have been caused by human activity such as slash-and-burn farming, hunting, or coal production.",
                category: "Wildfire",
                severity: "medium",
                date: "March 12, 2025",
                icon: "🔥",
                casualties: 0,
                injured: 0,
                displaced: 0,
                affectedArea: "(Barangay Pundaquit, San Antonio, Zambales; includes the mountain near the four coves. Nagsasa, Anawangin, Talisayen, Silanguin and surrounding bamboo groves)",
                fullDetails: "The wildfire in Pundaquit was first observed for several days but only reported on Monday when strong winds caused it to spread rapidly. Firefighters manually contained the fire using knapsacks and buckets, crossing a river to access the mountain. The blaze was initially controlled by noon but reignited at 8 p.m. and was fully contained past 11 p.m. An abandoned bamboo house may have been destroyed, but residential areas were safe, with a river acting as a natural firebreak. Tourism activities and nearby villages were largely unaffected, though firefighters also responded to fires in neighboring bamboo groves and forests.",
                recommendations: "Residents should avoid starting fires in dry seasons and report any fire immediately to local authorities. Authorities should conduct regular monitoring of forests and mountains to prevent human-caused fires, maintain accessible firefighting equipment, and ensure evacuation plans are in place for residents and tourists in nearby areas. Residents and visitors should stay alert during dry season and avoid lighting fires near forests, mountains, or bamboo groves."
            },
            {
                id: 5,
                title: "Taal Volcano erupts",
                description: "Taal Volcano erupted early Wednesday morning, producing a 2,500-meter-high plume before the eruption ended at 2:15 a.m. Alert Level 1 remains in effect, indicating low-level unrest with possible sudden phreatic eruptions, volcanic earthquakes, ashfall, and toxic gas emissions.",
                category: "Volcanic Eruption",
                severity: "low",
                date: "October 1, 2025",
                icon: "🌋",
                casualties: 0,
                injured: 0,
                displaced: 0,
                affectedArea: "(Talisay and Agoncillo)",
                fullDetails: "Taal Volcano erupted early Wednesday, with Phivolcs confirming that the eruption ended at 2:15 a.m. The 2,500-meter-high plume drifted northwest. Despite the eruption’s end, Alert Level 1 remains, meaning the volcano is still in low-level unrest. Phivolcs warns that sudden steam-driven eruptions, ashfall, volcanic earthquakes, and hazardous gas emissions remain possible. Residents were advised to stay indoors unless necessary and use face masks and eye protection when going outside.",
                recommendations: "Residents should stay indoors as much as possible, avoid areas near Taal Volcano Island, and wear face masks and protective eyewear when going outside due to possible ash and gas exposure. People should listen to Phivolcs and local authorities for updates and avoid traveling near the volcano’s danger zones to reduce risks from sudden phreatic explosions and toxic gas emissions."
            },
            {
                id: 6,
                title: "Benguet landslide during Super Typhoon Nando",
                description: "A landslide occurred on September 22, 2025, along Marcos Highway in Sitio Begis, Barangay Poblacion, Tuba, Benguet. Heavy rains and strong winds from Super Typhoon Nando (Ragasa) triggered the slope failure, burying multiple vehicles and causing travel disruption across Benguet.",
                category: "Landslide",
                severity: "High",
                date: "September 22, 2025",
                icon: "⛰️",
                casualties: 1,
                injured: 7,
                displaced: 0,
                affectedArea: "(Marcos Highway - Aspiras Palispis Road, Tuba, Benguet, Kennon Road and Asin–Nangalisan–San Pascual Road; Baguio City)",
                fullDetails: "On September 22, 2025, a rain-induced landslide struck a section of Marcos Highway in Sitio Begis, Tuba, Benguet due to heavy rains and strong winds brought by Super Typhoon Nando. Soil, rocks, and mud fell onto the road, crushing a fuel tanker, a van, a car, and an SUV. One elderly male died and several others were injured, with NDRRMC reporting seven total injured. The landslide forced the closure of major Benguet roads including Kennon Road and Asin–Nangalisan–San Pascual Road. Classes and some government work were suspended in multiple regions due to landslide and flood risks. Authorities conducted immediate rescue and debris-clearing operations, reopening some roads by the afternoon. Officials noted that even previously “safe” areas were affected due to heavy soil saturation and changing climate conditions. Hazard assessments and updated risk maps were recommended, reinforcing warnings that the Cordillera region remains highly vulnerable to rain-induced landslides.",
                recommendations: "Residents should avoid traveling through mountainous or slope-side roads during storms, monitor for warning signs like ground cracks or soil movement, and follow advisories from local disaster offices. Authorities should reassess landslide-prone zones, update geohazard maps, and prepare pre-emptive evacuation plans in high-risk communities. Travelers and motorists should stay updated on road closures, avoid unnecessary trips during heavy rains, and immediately report any visible slope instability to local authorities."
            }
        ];

        // Emergency contacts data
        const emergencyContacts = [
            {
                name: "Philippines National Office",
                number: "9-911",
                type: "🚨"
            },
            {
                name: "Department Of Health (DOH)",
                number: "87111001-02 || 8740-5030",
                type: "🏥"
            },
            {
                name: "PHIVOLCS",
                number: "(02) 8426-1468 to 79",
                type: "🌋"
            },
            {
                name: "NDRRMC",
                number: "8911-1406",
                type: "📱"
            },
            {
                name: "PAGASA",
                number: "8284-0800",
                type: "☎️"
            },
            {
                name: "Philippines Red Cross (PRC)",
                number: "9-143 || 8790-2300",
                type: "❌"
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