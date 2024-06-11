
import app from "./app";
import config from "./config";
import mongoose from "mongoose";

//  run server and connect with mongodb by mongoose 

  async function main() {

    app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`)
      })
    
    await mongoose.connect(config.db_url as string);
  }

  main()
  