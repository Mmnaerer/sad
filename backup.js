
      if (anu.action == "promote") {
        const mdata = await client.groupMetadata(anu.jid);
        anu_user = client.contacts[mem];
        num = anu.participants[0];
        try {
          ppimg = await client.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        let buff = await getBuffer(ppimg);
        teks = `@${num.split("@")[0]} Telah dipromote`;
        client.sendMessage(mdata.id, teks, MessageType.text);
      }

      if (anu.action == "demote") {
        anu_user = client.contacts[mem];
        num = anu.participants[0];
        const mdata = await client.groupMetadata(anu.jid);
        try {
          ppimg = await client.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }

        let buff = await getBuffer(
          `https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `@${num.split("@")[0]} Telah didemote`;
        client.sendMessage(mdata.id, teks, MessageType.text);
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });