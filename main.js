import express from 'express';
import cors from 'cors'
app.use(cors({
    origin: '*'
}));

const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;

let crystals = [
    { name: 'Amethyst', effects: ['romance', 'money', 'study'], color: 'Purple', hands: ['Left'] },
    { name: 'Clear Quartz', effects: ['relaxation', 'protective'], color: 'Clear', hands: ['Left', 'Right'] },
    { name: 'Rose Quartz', effects: ['romance', 'relaxation'], color: 'Pink', hands: ['Left'] },
    { name: 'Citrine', effects: ['money', 'confidence'], color: 'Yellow', hands: ['Left'] },
    { name: 'Strawberry Quartz', effects: ['romance'], color: 'Pink', hands: ['Left'] },
    { name: 'Smoky Quartz', effects: ['relaxation'], color: 'Brown', hands: ['Left', 'Right'] },
    { name: 'Aquamarine', effects: ['socialize', 'confidence'], color: 'Blue', hands: ['Left'] },
    { name: 'Garnet', effects: ['health'], color: 'Red', hands: ['Left'] },
    { name: 'Black obsidian', effects: ['protective'], color: 'Black', hands: ['Right'] },
    { name: 'Grape Stone', effects: ['study'], color: 'Green', hands: ['Left'] },
    { name: 'Moon Stone', effects: ['romance', 'relaxation'], color: 'White', hands: ['Left', 'Right'] }
];

// 根据功效筛选水晶
app.get('/crystalsByEffect', (req, res) => {
    const desiredEffect = req.query.effect;
    let matches = [];

    for (let crystal of crystals) {
        if (crystal.effects.includes(desiredEffect.toLowerCase())) {
            matches.push(crystal);
        }
    }

    if (matches.length === 0) {
        return res.status(404).send('No crystals found with that effect.');
    }

    res.send(matches);
});

// 根据颜色筛选水晶
app.get('/crystalsByColor', (req, res) => {
    const desiredColor = req.query.color;
    let matches = [];

    for (let crystal of crystals) {
        if (crystal.color.toLowerCase() === desiredColor.toLowerCase()) {
            matches.push(crystal);
        }
    }
    
    if (matches.length === 0) {
        return res.status(404).send('No crystals found with that color.');
    }

    res.send(matches);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
