const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const Reader = require('../models/reader');

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, profile, cb) {
        Reader.findOne({
            'googleId': profile.id
        }, function(err, reader) {
            if (err) return cb(err);
            if (reader) {
                return cb(null, reader);
            } else {
                const newReader = new Reader({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id,
                    avatar: profile.photos[0].value
                });
                newReader.save(function(err) {
                    if (err) return cb(err);
                    return cb(null, newReader);
                });
            }
        });
    }
));

passport.serializeUser(function(reader, done) {
    done(null, reader.id);
});

passport.deserializeUser(function(id, done) {
    Reader.findById(id, function(err, reader) {
        done(err, reader);
    });
});