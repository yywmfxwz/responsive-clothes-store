var shopServices = angular.module('shopServices', [])

shopServices.factory('Items', function() {
    return {
            shelf: [{'name': 'Almond Toe Court Shoes, Patent Black',
            'category': "Women's Footwear",
            'price': 99.00,
            'stockLeft': 5,
            'img': 'almond_black.jpeg'},
            {'name': 'Suede Shoes, Blue',
            'category': "Women's Footwear",
            'price': 42.00,
            'stockLeft': 4,
            'img': 'blue_suede_shoe.jpeg'},
            {'name': 'Leather Driver Saddle Loafers, Tan',
            'category': "Men's Footwear",
            'price': 34.00,
            'stockLeft': 12,
            'img': 'tan_loafers.jpeg'},
            {'name': 'Flip Flops, Red',
            'category': "Men's Footwear",
            'price': 19.00,
            'stockLeft': 6,
            'img': 'red_flipflop.jpeg'},
            {'name': 'Flip Flops, Blue',
            'category': "Men's Footwear",
            'price': 19.00,
            'stockLeft': 0,
            'img': 'blue_flipflop.jpeg'},
            {'name': 'Gold Button Cardigan, Black',
            'category': "Women's Casualwear",
            'price': 167.00,
            'stockLeft': 6,
            'img':'gold_button_cardi.jpeg'},
            {'name': 'Cotton Shorts, Medium Red',
            'category': "Women's Casualwear",
            'price': 30.00,
            'stockLeft': 5,
            'img': 'red_cotton_shorts.jpeg' },
            {'name': 'Fine Stripe Short Sleeve Shirt, Grey',
            'category': "Men's Casualwear",
            'price': 49.99,
            'stockLeft': 9,
            'img': 'grey_short_sleeve.jpeg'},
            {'name': 'Fine Stripe Short Sleeve Shirt, Green',
            'category': "Men's Casualwear",
            'price': 39.99,
            'stockLeft': 3,
            'img': 'green_short_sleeve.jpeg'
            },
            {'name': 'Sharkskin Waistcoat, Charcoal',
            'category': "Men's Formalwear",
            'price': 75.00,
            'stockLeft': 2,
            'img': 'sharkskin_waistcoat.jpeg'},
            {'name': 'Lightweight Patch Pocket Blazer, Deer',
            'category': "Men's Formalwear",
            'price': 175.00,
            'stockLeft': 1,
            'img': 'patch_pocket.jpeg'},
            {'name': 'Bird Print Dress, Black',
            'category': "Women's Formalwear",
            'price': 270.00,
            'stockLeft': 10,
            'img': 'bird_print.jpeg'},
            {'name': 'Mid Twist Cut-Out Dress, Pink',
            'category': "Women's Formalwear",
            'price': 540.00,
            'stockLeft': 5,
            'img': 'pink_dress.jpeg'},
        ],
        invoice: [
        ]
    }
});

shopServices.factory('Alerts', function(){
    return {
        alerts: [],
        addAlert: function(message) {
                    $scope.alerts.push({type: 'danger', msg: message})
                },
        closeAlert: function(index) {
                    $scope.alerts.splice(index, 1);
                }
    }
})
