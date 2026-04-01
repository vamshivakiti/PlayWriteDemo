import{test,Locator,expect, Frame} from'@playwright/test'
test('handling frames demo',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames');
    //To get total count of frames
    const allframes=page.frames();//retuns array of frames
    console.log("Total frames : ",allframes.length);
    //Handling frames 
    //Approach 1: ---> page.frame

    const  frame1:Frame|null= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

    if(frame1){
     await frame1.locator("[name='mytext1']").fill("Hello");
    }
    else{
        console.log("Frame not available");
    }
    
await page.waitForTimeout(3000);
})
//Approach 2: using frame locator

test('handling frames2 demo',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames');
    //To get total count of frames
    const allframes=page.frames();//retuns array of frames
    console.log("Total frames : ",allframes.length);
    //Handling frames 
    const  frame1:Frame|null= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

//Approach 2: using frame locator

const inputbox=page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']");
 await inputbox.fill("john");
page.waitForTimeout(2000);


})

test.only('handling frames3 demo',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames');
 const frame3=  page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
 if (frame3){
    frame3.locator("[name='mytext3']").fill('Wel come');
    const ChildFrames=frame3.childFrames();
    console.log('Inside the frame 3 ',ChildFrames)// Only One chld frame
    const radio=ChildFrames[0].getByLabel("I am a human");
   await radio.check();// select radio button
    await expect(radio).toBeChecked(); // Assersion
 }
 else{
    console.log('No Frame')
 }
await page.waitForTimeout(2000);


})