// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import { join } from 'path'

const dataDir = join(process.cwd(), 'data')
const dataFile = join(dataDir, 'contacts.json')

// Ensure directory & file exist
async function ensureDataFile() {
    await fs.mkdir(dataDir, { recursive: true })
    try {
        await fs.access(dataFile)
    } catch {
        await fs.writeFile(dataFile, '[]')
    }
}

export async function GET() {
    try {
        await ensureDataFile()
        const fileData = await fs.readFile(dataFile, 'utf-8')
        const contacts = JSON.parse(fileData)
        return NextResponse.json(contacts)
    } catch (err) {
        console.error('GET /api/contact error:', err)
        return NextResponse.json({ error: 'Failed to read contacts' }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        await ensureDataFile()
        const body = await req.json()
        const fileData = await fs.readFile(dataFile, 'utf-8')
        const contacts = JSON.parse(fileData)
        contacts.push({ ...body, submittedAt: new Date().toISOString() })
        await fs.writeFile(dataFile, JSON.stringify(contacts, null, 2))
        return NextResponse.json({ ok: true })
    } catch (err) {
        console.error('POST /api/contact error:', err)
        return NextResponse.json({ ok: false, error: 'Failed to save contact' }, { status: 500 })
    }
}
