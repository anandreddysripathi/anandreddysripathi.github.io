const projects = [
    {
        title: 'Computer Engineers Technical Association (CETA) app',
        url:'https://github.com/anandreddysripathi/AndroidApplication_CETA',
        private:true,
        image:'images/androidProject.png',
        type: 'Android Application',
        description: `A Responsive android app which lets students to view, participate,register for college occuring events,
         live updates of their participation and ranks`
    },
    {
        title: 'Generating Employee Digital Experience Certificate using SAP',
        image:'images/SAP_logo.png',
        url: 'https://github.com/anandreddysripathi/SAP_Project',
        type: 'SAP Script',
        description: `Generating the Employee
        details through digital Employee Experience certificate by using
        SAP Script.`
    },
    {
        title: 'Nutrition analysis using image classification',
        image:'images/nutrition.png',
        url: 'https://github.com/anandreddysripathi/NUTRITION-ANALYSIS-USING-IMAGE-CLASSIFICATION',
        type: 'Deep Learning',
        description: `Estimation of calories present in the food(input image) using CNNs`
    },
    {
        title: 'Blockchain System',
        image:'images/Blockchain.jpg',
        url: 'https://github.com/anandreddysripathi/BlockChain-with-MongoDB',
        type: '',
        description: `A real world implementation of the block chain with the corruption and fixing.`
    },
    {
        title: 'Hbase fundamentals',
        image:'images/hbase.png',
        url: 'https://github.com/anandreddysripathi/ApacheHBase',
        type: 'NoSQL Database',
        description: `Introduction to Hbase and it's implementation.`
    },
    {
        title: 'Software Project Model for Quality Assurance System',
        image:'images/spm.png',
        url: 'https://github.com/anandreddysripathi/Software-Quality-Assurance-System_Software-Project-Management',
        type: 'Software Project Management',
        description: `built an SQA system imagining myself as a Project Manager considering Scope,
        Time, Human Resource, Material, Cost, Risk, Procurement Managements.`
    },
    {
        title: 'Virtual Reality Project',
        image:'images/VR.jpg',
        url: 'https://github.com/anandreddysripathi/VirtualReality',
        type: 'VR',
        description: `A city that can be visualized on a VR headset for navigation, helpful for designers and architectures to see how it would look like and any improvements.`
    }
    
]

let search_input = document.getElementById('search');

function debounce( callback, delay ) {
    let timeout;
    return function() {
        clearTimeout( timeout );
        timeout = setTimeout( callback, delay );
    }
}

search_input.addEventListener(
    "keyup",
    debounce( filter, 1000 )
);


function displayProjects(list) {
    let value = ``;
    list.forEach((project) => {

        value += `
        <div>
        <div class="post">
            <a href=${project.url}><img class="thumbnail" src=${project.image}></a>
            <div class="post-preview">
                <h4 class="post-title">${project.title}-${project.type}</h4>
                <p class="post-intro" id="para"><b>${project.description}</b>
                </p>
                <button class="btn btn-primary" onclick="window.open('${project.url}', '_blank');">View Project</button>
            </div>
        </div>
        </div>
        `

    });

    document.getElementById('post-wrapper').innerHTML = value;
}

function filter(){
    let list = [];
    let searchText = document.getElementById('search').value;
    list = projects.filter(project=>{
        let name = project.title + " "+project.type+" "+project.description;
        return name.trim().toLowerCase().includes(searchText.trim().toLowerCase());
    })
    if(list.length!=0)
    displayProjects(list);
    else
    displayProjects(projects);
}


displayProjects(projects);

