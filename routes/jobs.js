const url = require('url')
const express = require('express')
const uuid = require('node-uuid')
const jobs = require('../jobs')
const router = express.Router()

/* POST new purify job. */
router.post('/purify', (req, res, next) => {
  if (!req.body) {
    return res.sendStatus(400)
  }

  // validate url
  const u = req.body.url

  // create new job from body response url
  const urlObj = url.parse(u)

  if (!urlObj.host) {
    return res.sendStatus(400)
  }

  if (!urlObj.protocl) {
    // assuming https
    urlObj.protocol = 'https:'
  }

  const jobData = {
    _id: uuid.v4(),
    total: Math.floor(Math.random() * (10 - 1 + 1) + 1)
  }

  jobs.queue.add(jobData).then((job) => {
    res.render('purifier/new.html', {
      job: job.jobId
    })
  }).catch((err) => {
    res.render('purifier/new.html', {
      error: err.message
    })
  })
})

module.exports = router
