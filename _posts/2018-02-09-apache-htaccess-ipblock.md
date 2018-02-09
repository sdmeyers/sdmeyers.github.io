---
layout: post
title:  "Block a range of IP address in an apache .htaccess file"
author: "Scott Meyers"
categories: [Web Security]
tags: [Apache, RegEx, Security]
---

So, imagine your website is getting a sudden deluge of hits from a single IP address from the Ukraine, for example `93.175.200.201`. You could easily a single block the IP right.

Just add

```apache
Deny from 93.175.200.201
```

to your apache config or .htaccess file and go back to sleep.

Or, let's be paranoid about this and discover all you can about this IP address. (If you take your website security seriously, you must be paranoid.) In doing so you find that `93.175.200.201` is part of a range of IP addresses that belongs to a single organization. Further research shows that this range of IP addresses seems to be complicit in a whole bunch of "WTF is happening to my network" scenarios. So the logical thing to do it block the whole range of IP addresses.

In our *"hypothetical example"* we find that `93.175.200.201` is just singe IP in the range of `93.175.192.0 - 93.175.207.255` belonging to a single organization that feels it's not worth wondering what's going on when one of their IPs is probing a single website with 1000's of requests a second over a non-trivial period of time (the amount of time it takes for someone on our end to notice it, notify us, etc...).

Using the traditional `Deny` config statement would be problematic. You could block all of `93.175.*.*` easily, but you would be blocking many more IPs than necessary. You could add individual entries for `93.175.192.*`, `93.175.193.*`, and so on, but that's a lot of work.

However, with a little help from mod_rewrite and mod_setenvif you can do this marvelous thing by adding this to you .htaccess file:

```apache
<IfModule mod_rewrite.c>
  <IfModule mod_setenvif.c>
    SetEnvIf Remote_Addr ^93\.175\.(19[2-9]|20[0-7])\. DENY=1
    Order allow,deny
    Allow from All
    Deny from env=DENY
  </IfModule>
</IfModule>
```  

That's it one simple RegEx to cover all the IP's in the range.
