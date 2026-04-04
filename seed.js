const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://icodeship:o8m9PX7IVWJRaUPR@xcross.7kcgy.mongodb.net/xcros').then(async () => {
    
    // Quick schema
    const hotelSchema = new mongoose.Schema({
        isFeatured: { type: Boolean, default: false },
        isExclusiveOffer: { type: Boolean, default: false }
    }, { strict: false });
    
    // Check if hotelv1s exists
    const HotelV1 = mongoose.model('HotelV1', hotelSchema, 'hotelv1s');

    const hotels = await HotelV1.find({});
    console.log(`Found ${hotels.length} hotels`);
    
    if (hotels.length >= 2) {
        await HotelV1.findByIdAndUpdate(hotels[0]._id, { isFeatured: true, isExclusiveOffer: true });
        await HotelV1.findByIdAndUpdate(hotels[1]._id, { isFeatured: true, isExclusiveOffer: false });
        console.log('Seeded featured hotels successfully!');
    }
    process.exit(0);
}).catch(console.error);
