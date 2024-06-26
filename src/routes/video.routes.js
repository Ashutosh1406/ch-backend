import {Router} from "express"
import {deleteVideo,getAllVideos,getVideoById,publishVideo,togglePublishStatus,updateVideo,getAllVideosByFilter, getAllVideosByUserId} from "../controllers/video.controller.js";
import {verifyJWT} from "../middlewares/auth.middleware.js";
import {upload} from "../middlewares/multer.middleware.js";


const router = Router()

router.route("/publish-video").post(verifyJWT,upload.fields([
    {
        name:'videoFile',
        maxCount:1
    },
    {
        name:"thumbnail",
        maxCount:1
    }
]),publishVideo)

router.route("/get-all-videos").get(getAllVideos)

router.route("/get-video-by-id/:videoId").get(getVideoById)

router.route("/update-video/:videoId").post(verifyJWT,upload.fields([
    {
        name:'Thumbnail',
        maxCount:1
    }
]),updateVideo)

router.route("/toggle-publish-status/:videoId").post(verifyJWT,togglePublishStatus)
router.route("/delete-video/:videoId").post(verifyJWT,deleteVideo)
router.route("/get-user-videos/:channelId").get(getAllVideosByUserId)

router.route("/get-all-videos-by-filter").get(getAllVideosByFilter)

export default router;