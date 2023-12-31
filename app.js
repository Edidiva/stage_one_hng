const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());
app.use("/api", router)


router.get('/', (req, res)=>{
     const slack_name = req.query.slack_name;
     const track = req.query.track;

     if (!slack_name || !track) {
      return res.status(400).json({
        "error": "Both slack_name and track are required."
    });

     }
      const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const date = new Date();
      const day = weekdays[date.getDay()];
      const utc_time = date.toISOString().slice(0, -5) + 'Z';
       res.status(200).json(
        {
            "slack_name": slack_name,
            "current_day": day,
            "utc_time": utc_time,
            "track": track,
            "github_file_url":"https://github.com/Edidiva/stage_one_hng/blob/main/app.js",
            "github_repo_url":"https://github.com/Edidiva/stage_one_hng",
            "status_code":200
        }
       )

})








app.listen(3000, function(){
    console.log("app listening on Port 3000")
})
