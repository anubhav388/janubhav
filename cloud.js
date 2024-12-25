const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'gsap', 'C++',
    'Python', 'git',
    'Node.js', 'OpenCV',
    'MySQL',
];

var tagCloud = TagCloud('.content', myTags,{
    radius: 200,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
})
