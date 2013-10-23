---
layout: post
title:  "Mavericks and Gmail, WTF?"
categories: OSX Gmail
---

So, you just upgraded your Mac to Mavericks (a.k.a. OS X 10.9) and was happily enjoying your new OS, when you suddenly noticed things weren't quite right in your Mail.app. Messages that you thought you had moved or deleted keep reappearing in your INBOX. Is it you? No, it's not. It's Mavericks' Mail.app not playing nice with Gmail.

## I don't care about who, what, where or why, how do I fix it!

If you are having this problem and just need a fix, here it is (but you may not like it).

Login to your [Gmail](https://mail.google.com) account in your web browser and then follow these 4 easy steps:

<!--more-->

<figure>

<img src="{{ site.url }}/images/posts/gmail_labels_1234.png" alt="4 Steps to get Mail to play nice with Gmail" />

<figcaption>4 Steps to to get Mail to play nice with Gmail</figcaption>

</figure>

1. Click on Settings (that's under gear in top right corner)

2. Select the "Labels" tab.

3. Check the "Show in IMAP" box listed next to "All Mail"

4. In Mail.app select **Mailbox > Synchronize > *Gmail* ** from the menu bar. Now wait for your account to synchronize, which could take a while since Mail may now download every email message you ever received in your Gmail account.

Mail will now store this "All Mail" mailbox as an Archive.

Don't like it? Well you could live with things as they are and hope Apple fixes this really quick, or just deal with it. Sorry, that's how it is.

## Why? (or WTF is wrong with Google)

To be clear, Apple broke Mail.app. Before we crucify Apple alone, we should realize, that it appears that Apple was really trying improve Gmail, because Google totally screwed it up to begin with.

Gmail is supposed to support IMAP, but only *kind of*/*maybe* supports IMAP. IMAP is based on the assumption that email is stored hierarchically in folders, Google does not do this. Google stores all your email (even email you thought you deleted) in one big bucket, and labels each message so that it *appears* to be contained in its appropriate Mailbox. To be fair Google tries to put some programming magic between this and your email client so that is can work (most of the time) as an IMAP server. It does this well, but not perfectly. Old Mail used to treat Gmail like an IMAP server and it mostly worked. New Mail is trying to treat Gmail like Gmail. In order for Gmail to work like Gmail it needs all the messages to sort out into mailboxes. Thus it needs "All Mail".

Trouble is most people don't want Mail to act like Gmail. I don't need anyone to store all my email forever. When I hit the delete button, I'm done with it. If I want it archived, I move it into a folder that makes sense to me. I certainly don't what to store 10GB of mostly worthless old email on my hardrive, just so Mail will behave like it should.

## Will it get fixed?

Google has no motivation to fix any IMAP incompatibilities at this point in the game. In fact I imagine Gmail will become more and more proprietary until it just tosses even pretending to be IMAP compatible out the window. Google also likes having all your email stored in one bucket. It allows them to mine years and years of your email to create a better profile on you for targeted advertisements. The labels add metadata to help improve your profile. Google is an advertising company. Everything they do is to create and present better ads for their clients (not the users, the advertisers).

Apple on the other hand will eventually fix this. Apple is notorious for having some glaring annoyance in every *X*.0 product they've ever shipped. They also have a pretty good track record for fixing things up in *X*.>0 releases. The Mail.app is at version 7.0. I'd imagine Apple people are hard at work on 7.1 right now.
