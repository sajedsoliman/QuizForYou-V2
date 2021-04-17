import React, { useState, useEffect } from 'react'

// Firebase imports
import { storage } from '../firebase/database'

export default function BackEnds() {

    const uploadImage = (imageFile, setAvatar) => {
        if (imageFile == null && imageFile.name == null) return ""
        const returnUrl = storage.ref(`images/${imageFile.name}`)
            .put(imageFile)
            .on
            (
                "state_changed",
                (snapshot) => {

                },
                (err) => console.error(err.message),
                () => {
                    const imageUrl = storage.ref("images").child(imageFile.name)
                        .getDownloadURL()
                        .then(url => {
                            setAvatar(url)
                        })
                }
            )

        return returnUrl
    }


    return {
        uploadImage
    }
}