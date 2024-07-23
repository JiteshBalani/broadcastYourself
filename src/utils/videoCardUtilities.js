import { formatDistanceToNow, parseISO } from 'date-fns';

export const formatDuration = (duration) => {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    // Regular expression to extract hours, minutes, and seconds from the ISO 8601 duration
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    if (match[1]) hours = parseInt(match[1].slice(0, -1));
    if (match[2]) minutes = parseInt(match[2].slice(0, -1));
    if (match[3]) seconds = parseInt(match[3].slice(0, -1));

    // Format hours, minutes, and seconds to be two digits
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export const formatPublishedDate = (dateString) => {
    const date = parseISO(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
};

export const formatViews = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M views';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K views';
    } else {
        return num + ' views';
    }
};

export const truncateTitle = (title, limit) => {
    if (title.length <= limit) {
        return title;
    }
    return title.slice(0, limit) + '...';
};