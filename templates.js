// templates.js

const bannerTemplates = [
    // ১. ছাত্র সমিতি
    { id: 1, name: 'ছাত্র সমিতি', bgColor: '#064e3b', data: {"version":"5.3.0","objects":[{"type":"rect","left":0,"top":0,"width":900,"height":1200,"fill":"#064e3b","selectable":false},{"type":"circle","left":250,"top":300,"radius":200,"fill":"#ffffff","stroke":"#4ade80","strokeWidth":8},{"type":"i-text","left":450,"top":100,"text":"পাবনা জেলা ছাত্র সমিতি","fontFamily":"Anek Bangla","fontSize":60,"fill":"#4ade80","fontWeight":"bold","originX":"center"},{"type":"i-text","left":450,"top":180,"text":"চট্টগ্রাম বিশ্ববিদ্যালয়","fontFamily":"Hind Siliguri","fontSize":40,"fill":"#ffffff","originX":"center"},{"type":"rect","left":250,"top":250,"width":400,"height":50,"fill":"#166534","rx":10,"ry":10},{"type":"i-text","left":450,"top":255,"text":"কার্যকরী কমিটি ২০২৩","fontFamily":"Hind Siliguri","fontSize":30,"fill":"#ffffff","originX":"center"},{"type":"rect","left":250,"top":800,"width":400,"height":70,"fill":"#ffffff","stroke":"#4ade80","strokeWidth":4,"rx":35,"ry":35},{"type":"i-text","left":450,"top":815,"text":"সাঈদ আল সাহাব","fontFamily":"Anek Bangla","fontSize":35,"fill":"#166534","fontWeight":"bold","originX":"center"},{"type":"i-text","left":450,"top":950,"text":"সাংগঠনিক সম্পাদক","fontFamily":"Baloo Da 2","fontSize":75,"fill":"#ffffff","fontWeight":"bold","originX":"center"}]} },
    // ২. স্বাধীনতা দিবস
    { id: 2, name: 'স্বাধীনতা দিবস', bgColor: '#14532d', data: {"version":"5.3.0","objects":[{"type":"rect","left":0,"top":0,"width":900,"height":1200,"fill":"#14532d","selectable":false},{"type":"circle","left":200,"top":200,"radius":250,"fill":"#ef4444"},{"type":"i-text","left":450,"top":300,"text":"২৬ শে মার্চ","fontFamily":"Tiro Bangla","fontSize":90,"fill":"#ffffff","fontWeight":"bold","originX":"center"},{"type":"i-text","left":450,"top":480,"text":"স্বাধীনতা দিবস","fontFamily":"Baloo Da 2","fontSize":110,"fill":"#ffffff","fontWeight":"bold","originX":"center"},{"type":"i-text","left":450,"top":800,"text":"THE INDEPENDENCE DAY OF BANGLADESH","fontFamily":"Poppins","fontSize":35,"fill":"#ffffff","fontWeight":"bold","originX":"center"}]} },
    // ৩. পলিটিক্যাল শুভেচ্ছা
    { id: 3, name: 'পলিটিক্যাল শুভেচ্ছা', bgColor: '#831843', data: {"version":"5.3.0","objects":[{"type":"rect","left":0,"top":0,"width":900,"height":1200,"fill":"#831843","selectable":false},{"type":"i-text","left":450,"top":150,"text":"পবিত্র ঈদুল ফিতর","fontFamily":"Galada","fontSize":90,"fill":"#fde047","originX":"center"},{"type":"i-text","left":450,"top":280,"text":"উপলক্ষে দেশবাসীকে জানাই","fontFamily":"Hind Siliguri","fontSize":40,"fill":"#ffffff","originX":"center"},{"type":"i-text","left":450,"top":360,"text":"ঈদের শুভেচ্ছা","fontFamily":"Anek Bangla","fontSize":80,"fill":"#ffffff","fontWeight":"bold","originX":"center"},{"type":"circle","left":250,"top":500,"radius":200,"fill":"#e5e7eb"},{"type":"rect","left":0,"top":950,"width":900,"height":250,"fill":"#4c0519","selectable":false},{"type":"i-text","left":450,"top":1000,"text":"মোহাম্মদ আলী","fontFamily":"Anek Bangla","fontSize":55,"fill":"#ffffff","fontWeight":"bold","originX":"center"},{"type":"i-text","left":450,"top":1080,"text":"সভাপতি, ঢাকা মহানগর","fontFamily":"Hind Siliguri","fontSize":35,"fill":"#fde047","originX":"center"}]} }
];

// আরও ১০০টি ডাইনামিক টেমপ্লেট যুক্ত করা হচ্ছে (যাতে ফাইল অনেক বড় না হয়, কিন্তু ১০০+ অপশন থাকে)
const colors = ['#1e3a8a', '#b45309', '#0f766e', '#be123c', '#4338ca', '#b91c1c', '#0f172a', '#047857'];
const categories = ['শুভেচ্ছা বার্তা', 'বিজ্ঞপ্তি', 'ভর্তি চলছে', 'ফ্ল্যাশ সেল', 'শুভ জন্মদিন'];

for (let i = 4; i <= 105; i++) {
    let color = colors[i % colors.length];
    let cat = categories[i % categories.length];
    
    bannerTemplates.push({
        id: i, 
        name: `${cat} 0${i}`, 
        bgColor: color,
        data: {
            "version":"5.3.0",
            "objects":[
                {"type":"rect","left":0,"top":0,"width":900,"height":1200,"fill":color,"selectable":false},
                {"type":"circle","left":250,"top":300,"radius":200,"fill":"#ffffff","stroke":"#fde047","strokeWidth":5},
                {"type":"i-text","left":450,"top":150,"text":cat,"fontFamily":"Anek Bangla","fontSize":80,"fill":"#fde047","fontWeight":"bold","originX":"center"},
                {"type":"i-text","left":450,"top":800,"text":"আপনার নাম লিখুন","fontFamily":"Anek Bangla","fontSize":50,"fill":"#ffffff","fontWeight":"bold","originX":"center"},
                {"type":"i-text","left":450,"top":880,"text":"পদবি / ঠিকানা","fontFamily":"Hind Siliguri","fontSize":35,"fill":"#e5e7eb","originX":"center"}
            ]
        }
    });
}

// এক্সপোর্ট করা হচ্ছে যাতে index.html এ পাওয়া যায়
window.bannerTemplates = bannerTemplates;

