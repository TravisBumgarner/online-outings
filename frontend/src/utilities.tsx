import React from 'react'
import { SvgIconProps } from '@material-ui/core';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import ForumIcon from '@material-ui/icons/Forum'
import TheatersIcon from '@material-ui/icons/Theaters'
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk'


type Category = 'game' | 'watch' | 'discuss' | 'move_about'

const categoryIconMap: { [key in Category]: React.ComponentType<SvgIconProps> } = {
    discuss: ForumIcon,
    game: VideogameAssetIcon,
    move_about: DirectionsWalkIcon,
    watch: TheatersIcon,
}

const categoryNameMap: { [key in Category]: string } = {
    discuss: "Discuss",
    game: "Game",
    move_about: "Move About",
    watch: "Watch",
}

export { categoryIconMap, categoryNameMap, Category }