const Ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTicket,
    update,
    delete: deleteTicket
};

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, toy) {
        res.redirect(`/flights/${req.params.id}`);
    })
}

function newTicket(req, res) {
    Ticket.find({}, function (err, tickets) {
      res.render('tickets/new', {
        title: 'Add Ticket',
        flightId: req.params.id
      });
    })
  }

  function update(req, res) {
    Ticket.findById(req.params.id, function(err, toy) {
        Object.assign(ticket, req.body);
        ticket.save(function(err) {
            res.redirect(`/flights/${ticket.flight}`);
        })
    })
}

function deleteTicket(req, res) {
    Ticket.findByIdAndDelete(req.params.id, function(err, deletedTicket) {
        res.redirect(`/flights/${deletedTicket.flights}`);
    })
}