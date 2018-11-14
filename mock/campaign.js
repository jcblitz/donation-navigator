const campaign = {
    campaigns: [
        {
            id: 1,
            title: "Spring Ford 2019 Flag Football",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean enim velit, facilisis vestibulum pretium vel, lobortis id nulla. Duis id malesuada libero, molestie finibus magna.",
        startDate: new Date(),
        endDate: new Date(),
        campaignItems: [
                {
                    id: 1,
                    name: "Helmets",
                    description: "Maecenas vel varius lorem. Cras nec arcu tortor. Etiam ac enim eget sapien fringilla porta. Duis lobortis lacinia mi pretium tempor. ",
                    cost: 10000,
                    donors: 10
                },
                {
                  id: 2,
                  name: "Jerseys",
                  description: "Nunc eu est eleifend, consectetur dolor vel, laoreet libero. Quisque euismod facilisis placerat.",
                  cost: 2000,
                  donors: 3
                },
                {
                  id: 3,
                  name: "Cones",
                  description: "consectetur dolor vel, laoreet libero. Quisque euismod facilisis placerat.",
                  cost: 300,
                  donors: 2
                }
            ]
        }
    ]
}
    
console.log(JSON.stringify(campaign));