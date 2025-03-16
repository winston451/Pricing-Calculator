// Pricing data extracted from the CSV/TSV files
const pricingData = {
    "standard-flyers": {
        name: "Standard 1-Sided Flyers",
        stock: "100lb Cover",
        quantities: [25, 50, 100, 250, 500, 1000, 2500, 5000],
        prices: {
            "1sided": [45.00, 65.00, 85.00, 125.00, 175.00, 275.00, 425.00, 540.00]
        },
        services: {
            "design": 49.00,
            "note": "Design service fee includes professional layout and up to 2 revisions."
        }
    },
    "business-cards": {
        name: "Business Cards (2x3.5)",
        stock: "14PT",
        quantities: [100, 250, 500, 1000, 2500, 5000],
        prices: {
            "1sided": [59.95, 79.95, 99.95, 129.95, 225.95, 279.00],
            "2sided": [64.95, 89.95, 119.95, 139.95, 225.95, 279.00]
        },
        services: {
            "design": "Included",
            "setup": "Included",
            "reorder-discount": 15.00
        }
    },
    "flyers-invitations-small": {
        name: "Flyers/Invitations (4.25 x 5.5 & 4x6)",
        stock: "100lb Cover",
        quantities: [25, 50, 100, 250, 500, 1000, 2500, 5000],
        prices: {
            "1sided": [28.00, 48.00, 69.00, 95.00, 135.00, 158.95, 232.95, 335.95],
            "2sided": [32.00, 59.00, 76.00, 107.00, 155.00, 188.95, 262.95, 365.95]
        },
        services: {
            "design": 49.00,
            "note": "Only charge design fee if 2nd side is a different original."
        }
    },
    "flyers-invitations-medium": {
        name: "Flyers/Invitations (5x7 & 5.5 x 8.5)",
        stock: "100lb Cover",
        quantities: [25, 50, 100, 250, 500, 1000, 2500, 5000],
        prices: {
            "1sided": [45.25, 52.00, 74.00, 135.00, 185.00, 290.00, 398.00, 540.75],
            "2sided": [56.56, 65.00, 92.50, 168.75, 231.25, 290.00, 398.00, 540.75]
        },
        services: {
            "design": 49.00,
            "setup": 20.00,
            "note": "Only charge design fee if 2nd side is a different original. Setup fee applies if design is camera ready."
        }
    },
    "flyers-invitations-large": {
        name: "Flyers/Invitations (6.25x9)",
        stock: "100lb Cover",
        quantities: [25, 50, 100, 250, 500],
        prices: {
            "1sided": [48.00, 66.00, 108.00, 162.00, 204.00],
            "2sided": [60.00, 82.50, 135.00, 202.50, 255.00]
        },
        services: {
            "design": 49.00
        }
    },
    "yard-signs": {
        name: "Horizontal Yard Signs",
        sizes: {
            "18x24": {
                quantities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                pricePerUnit: [59.95, 49.95, 46.65, 44.95, 41.76, 35.47, 31.13, 27.74, 25.66, 23.99],
                totalPrices: [59.95, 99.90, 139.95, 179.80, 208.80, 212.85, 217.97, 221.95, 230.95, 239.95]
            },
            "18x24-12x24": {
                quantities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                pricePerUnit: [49.95, 44.95, 43.31, 42.45, 39.76, 33.80, 30.12, 26.49, 24.55, 22.50]
            }
        },
        services: {
            "design": "Included",
            "stakes": "Included"
        }
    },
    "posters": {
        name: "Posters",
        types: {
            "express": {
                sizes: ["11x17", "12x18", "13x19"],
                stock: ["100lb Gloss Text", "100lb Gloss Cover", "100lb Gloss Cover"],
                prices: [5.00, 8.00, 9.00],
                note: "Camera Ready, 1-sided Print Price ONLY"
            },
            "standard-11x17": {
                stock: "32lb",
                quantities: [25, 50, 100],
                prices: [74.00, 102.00, 154.00],
                design: 49.00
            },
            "standard-12x18": {
                stock: "14PT",
                quantities: [25, 50, 100],
                prices: [173.75, 247.50, 325.00],
                design: 49.00
            },
            "standard-13x19": {
                stock: "14PT",
                quantities: [25, 50, 100],
                prices: [185.25, 267.00, 329.00],
                design: 49.00
            },
            "mounted": {
                stock: "Coroplast or Foamcore",
                sizes: ["16x20", "18x24", "24x36", "48x48", "3ftx6ft"],
                prices: [49.95, 65.00, 95.00, 110, 115],
                design: "Included in Prices"
            },
            "paper": {
                stock: "60LB",
                sizes: ["16x20", "18x24", "24x36", "48x48"],
                prices: [19.95, 29.00, 59.00, null],
                design: 49.00
            },
            "canvas": {
                note: "Camera Ready Pricing Only",
                sizes: ["16x20", "18x24", "20x24", "24x36", "32x48"],
                prices: [49.00, 57.00, 72.00, 95.40, 113.40]
            }
        }
    },
    "brochures": {
        name: "Tri-Fold Brochures",
        types: {
            "8.5x11": {
                stock: "Matte or Gloss",
                quantities: [25, 50, 100, 250, 500],
                prices: [69.95, 92.95, 145.95, 257.95, 326.95],
                design: 125.00
            },
            "11x17-2sided": {
                stock: "Matte or Gloss",
                quantities: [25, 50, 100, 250, 500],
                prices: [106.95, 144.95, 228.95, 480.95, 592.95],
                design: 125.00
            }
        }
    },
    "menus": {
        name: "Menus (2-sided)",
        types: {
            "8.5x11": {
                stock: "80lb Gloss Text",
                quantities: [25, 50, 75, 100, 150, 200, 250, 500, 1000, 2500, 5000],
                prices: [52.00, 74.00, 73.50, 90.00, 156.00, 188.00, 214.00, 230.00, 258.40, 380.00, 459.00],
                design: 150.00
            },
            "8.5x14": {
                stock: "80lb Gloss Text",
                quantities: [500, 1000, 2500, 5000],
                prices: [330.00, 421.50, 616.50, 925.50],
                design: 150.00
            },
            "11x17": {
                stock: "80lb Gloss Text",
                quantities: [25, 50, 75, 100, 150, 200, 250, 500, 1000, 2500, 5000],
                prices: [86.00, 124.00, 162.00, 198.00, 276.00, 352.00, 428.00, 512.00, 554.80, 828.40, 1335.70],
                design: 150.00
            }
        }
    },
    "banners": {
        name: "Banners",
        types: {
            "retractable-36x80": {
                price: 299.00,
                note: "Kit included"
            },
            "retractable-33x80": {
                price: 269.00,
                note: "Kit included"
            },
            "crossbow-23.5x62": {
                price: 129.00,
                vendorCost: 63.00
            },
            "crossbow-79x30": {
                price: 189.00,
                vendorCost: 84.00
            },
            "step-repeat-8x8": {
                price: 249.00
            },
            "step-repeat-8x8-pole": {
                price: 269.00,
                note: "With Pole Pocket"
            },
            "standard-72x36": {
                price: 125.00
            },
            "led-lightbox": {
                price: 825.00,
                note: "Double-sided graphics"
            }
        }
    },
    "tickets": {
        name: "Tickets (Standard 2x6)",
        stock: "14PT",
        types: {
            "standard": {
                note: "1-sided Print Only",
                quantities: [50, 100, 250, 500, 1000, 1500],
                prices: {
                    "print-ready": [69.95, 79.95, 139.95, 179.95, 210.95, 259.95],
                    "design-setup": [79.95, 99.95, 159.95, 199.95, 239.95, 279.95]
                }
            },
            "raffle": {
                note: "Tickets are perforated and has numbers",
                quantities: [250, 500, 1000],
                prices: {
                    "black-white": [105.00, 159.00, 225.00],
                    "color": [175.00, 225.00, 299.00]
                }
            }
        }
    },
    "obituaries": {
        name: "Obituaries",
        types: {
            "4pages-8.5x11": {
                name: "4 pages (8.5x11 folds to 5.5x8.5)",
                stock: "100lb Gloss Text",
                description: "Bi-Fold, Full Color, Folded, Stapled, Includes up to 6 Photos",
                quantities: [50, 100, 150, 200, 250, 300, 350],
                prices: {
                    "print-ready": [130.00, 189.00, 255.49, 315.50, 367.50, 445.00, 515.00],
                    "design-setup": [199.00, 260.00, 324.00, 384.50, 436.50, 514.00, 584.00]
                },
                options: {
                    "full-bleed": [30.00, 50.00, 50.00, 65.00, 65.00, 70.00, 70.00],
                    "paginate-fee": 25.00,
                    "type-set-fee": 45.00
                }
            },
            "4pages-8.5x14": {
                name: "4 pages (8.5x14 folds to 8.5x8.7)",
                stock: "100lb Gloss Text or Matte Finish",
                description: "Bi-Fold, Full Color, Folded, Stapled, Includes up to 10 Photos",
                quantities: [50, 100, 150, 200, 250, 300, 350],
                prices: {
                    "print-ready": [168.00, 229.00, 299.00, 342.50, 387.50, 432.50, 477.50],
                    "design-setup": [237.00, 298.00, 368.00, 411.50, 456.50, 501.50, 546.50]
                },
                options: {
                    "full-bleed": [30.00, 50.00, 50.00, 65.00, 65.00, 70.00, 70.00],
                    "paginate-fee": 20.00,
                    "type-set-fee": 45.00
                }
            },
            "4pages-11x17": {
                name: "4 pages (11x17 folds to 8.5x11)",
                stock: "100lb Gloss Text or Matte Finish",
                description: "Bi-Fold, Full Color, Folded, Stapled, Includes up to 20 Photos",
                quantities: [50, 100, 150, 200, 250, 300, 350],
                prices: {
                    "print-ready": [227.00, 335.00, 440.00, 562.00, 695.00, 749.00, 902.00],
                    "design-setup": [307.00, 415.00, 520.00, 642.00, 775.00, 829.00, 992.00]
                },
                options: {
                    "full-bleed": [60.00, 70.00, 70.00, 80.00, 80.00, 90.00, 90.00],
                    "paginate-fee": 20.00,
                    "type-set-fee": 45.00
                }
            },
            "8pages-8.5x11": {
                name: "8 pages (8.5x11 folds to 5.5x8.5)",
                stock: "100lb Gloss Text or Matte Finish",
                description: "Bi-Fold, Full Color, Folded, Stapled, Includes up to 12 Photos",
                quantities: [50, 100, 150, 200, 250, 300, 350],
                prices: {
                    "print-ready": [298.00, 358.00, 425.00, 565.00, 677.00, 769.00, 865.00],
                    "design-setup": [432.00, 490.00, 557.00, 697.00, 809.00, 901.00, 997.00]
                },
                options: {
                    "full-bleed": [40.00, 60.00, 60.00, 70.00, 75.00, 80.00, 80.00],
                    "paginate-fee": 35.00,
                    "type-set-fee": 90.00
                }
            },
            "8pages-8.5x14": {
                name: "8 pages (8.5x14 folds to 8.5x7)",
                stock: "100lb Gloss Text or Matte Finish",
                description: "Bi-Fold, Full Color, Folded, Stapled, Includes up to 20 Photos",
                quantities: [50, 100, 150, 200, 250, 300, 350],
                prices: {
                    "print-ready": [337.00, 460.00, 541.00, 635.00, 725.00, 805.00, 880.00],
                    "design-setup": [469.00, 592.00, 673.00, 767.00, 857.00, 937.00, 1012.00]
                },
                options: {
                    "full-bleed": [40.00, 60.00, 60.00, 70.00, 75.00, 80.00, 80.00],
                    "paginate-fee": 35.00,
                    "type-set-fee": 90.00
                }
            },
            "8pages-11x17": {
                name: "8 pages (11x17 folds to 8.5x11)",
                stock: "100lb Gloss Text or Matte Finish",
                description: "Bi-Fold, Full Color, Folded, Stapled, Includes up to 40 Photos",
                quantities: [50, 100, 150, 200, 250, 300, 350],
                prices: {
                    "print-ready": [487.00, 567.00, 646.00, 749.00, 838.00, 995.00, 1112.00],
                    "design-setup": [629.00, 709.00, 788.00, 891.00, 980.00, 1137.00, 1254.00]
                },
                options: {
                    "full-bleed": [80.00, 100.00, 100.00, 110.00, 110.00, 125.00, 125.00],
                    "paginate-fee": 35.00,
                    "type-set-fee": 90.00
                }
            },
            "6page-trifold-8.5x14": {
                name: "6 page Tri-Fold (8.5x14)",
                stock: "100lb Gloss Text or Matte Finish",
                description: "Tri-Fold, Full Color, Folded, Stapled, Includes up to 25 Photos",
                quantities: [50, 100, 150, 200, 250, 300, 350],
                prices: {
                    "print-ready": [179.00, 377.00, 475.00, 525.00, 669.00, 785.00, 819.00],
                    "design-setup": [289.00, 488.00, 585.00, 635.00, 779.00, 895.00, 929.00]
                },
                options: {
                    "full-bleed": [30.00, 30.00, 35.00, 35.00, 40.00, 50.00, 55.00],
                    "paginate-fee": 25.00,
                    "type-set-fee": 55.00
                }
            },
            "6page-trifold-11x17": {
                name: "6 page Tri-Fold (11x17)",
                stock: "100lb Gloss Text or Matte Finish",
                description: "Tri-Fold, Full Color, Folded, Stapled, Includes up to 30 Photos",
                quantities: [50, 100, 150, 200, 250, 300, 350],
                prices: {
                    "print-ready": [250.00, 417.00, 535.00, 655.00, 732.00, 815.00, 999.00],
                    "design-setup": [360.00, 527.00, 645.00, 765.00, 842.00, 925.00, 1109.00]
                },
                options: {
                    "full-bleed": [30.00, 30.00, 35.00, 35.00, 40.00, 50.00, 55.00],
                    "paginate-fee": 25.00,
                    "type-set-fee": 55.00
                }
            }
        }
    }
};
