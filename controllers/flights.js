const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newFlight,
  create,
  index,
  show,
  delete: deleteFlight
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    if (err) console.log(err);
    res.render("flights/index", { flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets){
      res.render('flights/show', { title: 'Flights Detail', flight, tickets })
    });
  });
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function (err, deletedFlight) {
    if (err) console.log(err);
  })
  res.redirect(`/flights`);
};

function create(req, res) {
  if (req.body.departs === '') delete req.body.departs;
  Flight.create(req.body, function (err, flight) {
    if (err) console.log(err);
    res.redirect(`/flights`);
  })
}

function newFlight(req, res) {
  const newFlight = new Flight();
  const dt = newFlight.departs;
  let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
  departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
  res.render('flights/new', { departsDate });
}
