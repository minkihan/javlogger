#!/bin/sh

DATETIME=$(date '+%Y-%m-%d %H:%M:%S')
MOVEDIR=/tr/2_download_done

# logging
#sed -i '1s/^/['"$DATETIME"'] '"$TR_TORRENT_NAME"'\n/' /tr/99_log/history.log
echo [$DATETIME] $TR_TORRENT_NAME >> /tr/99_log/history.log

# move progress(1) to download_done(2)
transmission-remote -n aya5:!L_wHRO_OStSa=0w --torrent "$TR_TORRENT_ID" --move "$MOVEDIR"
