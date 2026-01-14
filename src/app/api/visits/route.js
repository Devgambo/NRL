import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const VISITS_FILE = path.join(process.cwd(), 'visits.json')

// Initialize visits file if it doesn't exist
function initVisitsFile() {
    if (!fs.existsSync(VISITS_FILE)) {
        fs.writeFileSync(VISITS_FILE, JSON.stringify({ count: 0 }), 'utf-8')
    }
}

// Read current visit count
function getVisitCount() {
    initVisitsFile()
    const data = fs.readFileSync(VISITS_FILE, 'utf-8')
    return JSON.parse(data).count
}

// Increment and return new visit count
function incrementVisitCount() {
    initVisitsFile()
    const data = fs.readFileSync(VISITS_FILE, 'utf-8')
    const { count } = JSON.parse(data)
    const newCount = count + 1
    fs.writeFileSync(VISITS_FILE, JSON.stringify({ count: newCount }), 'utf-8')
    return newCount
}

// GET - retrieve current visit count without incrementing
export async function GET() {
    try {
        const count = getVisitCount()
        return NextResponse.json({ count })
    } catch (error) {
        console.error('Error reading visit count:', error)
        return NextResponse.json({ error: 'Failed to read visit count' }, { status: 500 })
    }
}

// POST - increment visit count
export async function POST() {
    try {
        const count = incrementVisitCount()
        return NextResponse.json({ count })
    } catch (error) {
        console.error('Error incrementing visit count:', error)
        return NextResponse.json({ error: 'Failed to increment visit count' }, { status: 500 })
    }
}
