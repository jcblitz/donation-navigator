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
                    donors: [
                        {
                            "user_id": {
                              "$oid": "5c01b13dfc13ae570d000000"
                            },
                            "amount": 902
                          }, {
                            "user_id": {
                              "$oid": "5c01b13dfc13ae570d000001"
                            },
                            "amount": 926
                          }, {
                            "user_id": {
                              "$oid": "5c01b13dfc13ae570d000002"
                            },
                            "amount": 647
                          }, {
                            "user_id": {
                              "$oid": "5c01b13dfc13ae570d000003"
                            },
                            "amount": 1864
                          }, {
                            "user_id": {
                              "$oid": "5c01b13dfc13ae570d000004"
                            },
                            "amount": 1836
                          }
                    ]
                },
                {
                  id: 2,
                  name: "Jerseys",
                  description: "Nunc eu est eleifend, consectetur dolor vel, laoreet libero. Quisque euismod facilisis placerat.",
                  cost: 2000,
                  donors: [
                    {
                        "user_id": {
                          "$oid": "5c01b13dfc13ae570d000005"
                        },
                        "amount": 118
                      }, {
                        "user_id": {
                          "$oid": "5c01b13dfc13ae570d000006"
                        },
                        "amount": 1459
                      }
                  ]
                },
                {
                  id: 3,
                  name: "Cones",
                  description: "consectetur dolor vel, laoreet libero. Quisque euismod facilisis placerat.",
                  cost: 300,
                  donors: [
                    {
                        "user_id": {
                          "$oid": "5c01b13dfc13ae570d000007"
                        },
                        "amount": 358
                      }, {
                        "user_id": {
                          "$oid": "5c01b13dfc13ae570d000008"
                        },
                        "amount": 236
                      }, {
                        "user_id": {
                          "$oid": "5c01b13efc13ae570d000009"
                        },
                        "amount": 1633
                      }, {
                        "user_id": {
                          "$oid": "5c01b13efc13ae570d00000a"
                        },
                        "amount": 216
                      }, {
                        "user_id": {
                          "$oid": "5c01b13efc13ae570d00000b"
                        },
                        "amount": 731
                      }, {
                        "user_id": {
                          "$oid": "5c01b13efc13ae570d00000c"
                        },
                        "amount": 763
                      }, {
                        "user_id": {
                          "$oid": "5c01b13efc13ae570d00000d"
                        },
                        "amount": 120
                      }
                  ]
                }
            ]
        }
    ]
}
    
console.log(JSON.stringify(campaign));