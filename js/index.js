var firstPromise = new Promise(function (resolve,reject)  {
    const card1=`
    <div class="card" style="width:300px; float:left;margin:10px;">

            <div class="card-body">
                <img src="images/cse-department.png" class="img-fluid">
            </div>
            <div class="card-footer">
                <p class="h4">CSE</p>
                <p class="text-muted text-justify text-muted">The Computer Science and Engineering department was started in the year 2001 with an intake of 60 B.Tech. students. The current B.Tech. intake is 300. The department also offers M.Tech. in Artificial Intelligence (with an intake of 18) and Ph.D. The department was accredited by the National Board of Accreditation (NBA) of All India Council for Technical Education (AICTE) in the year 2007.
                </p>
            </div>
        </div>
    `
    setTimeout(function(){
        document.getElementById("logo1").innerHTML=card1;
        console.log("first");
        resolve(card1);
    }
    ,3000);

});

var secondPromise = new Promise(function (resolve,reject)  {
    const card=`
    <div class="card" style="width:300px; float:left;margin:10px;">

            <div class="card-body">
                <img src="images/ece-logo.png" class="img-fluid">
            </div>
            <div class="card-footer">
                <p class="h4">ECE</p>
                <p class="text-muted text-justify text-muted">The Department of Electronics and Communication Engineering is one of the departments that started at the time of inception of CVR College of Engineering in 2001 with an intake of 60 B.Tech. students.  Expanding its horizons over the years, the department presently offers the B.Tech. program with an intake of 240, two M.Tech. programs with specializations in VLSI (intake 18), and Embedded Systems (intake 18), as well as Ph.D.  The department is accredited by the National Board of Accreditation.
                </p>
            </div>
        </div>
    `
    setTimeout(
        function(){
            document.getElementById("logo2").innerHTML=card;
            console.log("second");
            resolve(card);
        }
    ,6000);

});
var thirdPromise = new Promise(function (resolve,reject)  {
    const card=`
    <div class="card" style="width:300px; float:left;margin:10px;">

    <div class="card-body">
        <img src="images/it-logo.png" class="img-fluid">
    </div>
    <div class="card-footer">
        <p class="h4">IT</p>
        <p class="text-muted text-justify text-muted">The Department of Information Technology was started in the year 2001 with an initial intake of 60 B. Tech. students. Subsequently, the intake was increased to 180. The Department also offers an M.Tech. in Data Sciences with an intake of 18. The Department was accredited by NBA, AICTE in the year 2007 and reaccredited in the years 2013 and 2018. The Department is headed by Dr. Bipin Bihari Jayasingh.  All faculty members have an M. Tech. in Computer Science, with a minimum of about 4 years of teaching experience at the Assistant Professor level, which is an entry level requirement for recruitment to the department. The faculty consists of a good mix of individuals with industry and academic experience. The Department also has a high faculty retention rate.
        </p>
    </div>
</div>
    `
    setTimeout(
        function(){
            document.getElementById("logo3").innerHTML=card
            console.log("third");
            resolve(card);
        }
    ,9000);

});

async  function render  ()  {
    await firstPromise;
    await secondPromise;
    await thirdPromise;
}