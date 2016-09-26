const url = require('url')
const express = require('express')
const uuid = require('node-uuid')
const jobs = require('../jobs')
const router = express.Router()

/* GET purify job */
router.get('/jobs/:jobId', (req, res, next) => {
  const context = {}
  // lookup job
  const jobId = req.params.jobId
  jobs.queue.getJob(jobId).then((job) => {
    if (!job) {
      context.error = `No job with ${jobId} submitted`
    } else {
      context.jobId = job.jobId
    }

    res.render('purify/job.html', context)
  }).catch((err) => {
    res.render('purify/job.html', {
      error: err.message
    })
  })
})

/* POST new purify job */
router.post('/new', (req, res, next) => {
  function validateUrl() {
    if (!req.body.url) {
      return ['URL is required']
    }

    // validate url
    const u = req.body.url

    // create new job from body response url
    const urlObj = url.parse(u)

    if (!urlObj.host) {
      return ['Host is required']
    }

    return
  }

  const errors = validateUrl()

  if (errors) {
    console.log(errors)
    res.render('index.html', { errors })
  } else {
    // create new job from body response url
    const u = req.body.url
    const urlObj = url.parse(u)
    if (!urlObj.protcol) {
      // assuming https
      urlObj.protocol = 'https:'
    }

    const jobData = {
      _id: uuid.v4(),
      total: Math.floor(Math.random() * (10 - 1 + 1) + 1)
    }

    jobs.queue.add(jobData).then((job) => {
      res.redirect(`/purify/jobs/${job.jobId}`)
    }).catch((err) => {
      res.render('index.html', {
        errors: [err.message]
      })
    })
  }
})

module.exports = router
